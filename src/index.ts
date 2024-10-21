import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { serveStatic } from "hono/serve-static";
import { styles } from "./styles";
import html from "./html";
import { getRandomMovie, getRandomQuote, movies } from "./movies";

const app = new Hono();

// serveStatic middleware for CSS styling
app.use('/public/*', serveStatic({
    path: "./assets/styles.css",
    getContent: async (path: string, c: Context) => {
        try {
            const filePath = `./assets/${path}`;  // Path to the CSS file
            return new Response(styles, {
                status: 200,
                headers: {
                    'Content-Type': 'text/css',  // Set content type as CSS
                }
            });
        } catch (err) {
            return new Response("File not found", { status: 404 });
        }
    }
}));

app.use("*", cors());

// Add a homepage route at the base path "/"
app.get("/", (c) => {
    return c.html(html);
});

app.all(`/quotes/random`, (c) => c.json(getRandomQuote(getRandomMovie())));
app.all(`/movies`, (c) => c.json(movies.map(m => {
    return {
        name: m.name,
        id: m.id,
        attributes: {
            quotes_length: m.quotes.length,
            top_cast_length: m.top_cast.length,
            year: m.year
        }
    }
})));

// create routes for each of the movies
movies.map((movie) => {
    app.all(`/${movie.id}`, (c) => c.json({ movie }));
    app.all(`/${movie.id}/quotes/random`, (c) => c.json({ quote: getRandomQuote(movie.id) }));
    app.all(`/${movie.id}/quotes/random/text`, (c) => c.text(getRandomQuote(movie.id)));
    app.all(`/${movie.id}/quotes`, (c) => c.json(movie.quotes));
    app.all(`/${movie.id}/cast/top`, (c) => c.json(movie.top_cast));
})

app.all("*", (c) => c.notFound());
app.onError((err, _) =>
    new HTTPException(500, { message: err.message }).getResponse()
);

export default app;
