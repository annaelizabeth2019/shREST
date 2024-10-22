import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { serveStatic } from "hono/serve-static";
import { getRandomMovie, getRandomQuote, movies } from "./movies";
import html from "./html";
import styles from "./styles";

const app = new Hono();

// serveStatic middleware provides CSS styling
app.all('/public/*', serveStatic({
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

app.get("/", (c) => c.html(html));

app.get("/quotes/random", (c) => c.json(getRandomQuote(getRandomMovie())));
app.get("/movies", (c) => c.json(movies.map(m => ({
    name: m.name,
    id: m.id,
    attributes: {
        quotes_length: m.quotes.length,
        top_cast_length: m.top_cast.length,
        year: m.year
    }
}))));

movies.forEach((movie) => {
    app.get(`/${movie.id}`, (c) => c.json({ movie }));
    app.get(`/${movie.id}/quotes/random`, (c) => c.json(getRandomQuote(movie.id)));
    app.get(`/${movie.id}/quotes/random/text`, (c) => c.text(getRandomQuote(movie.id)));
    app.get(`/${movie.id}/quotes`, (c) => c.json(movie.quotes));
    app.get(`/${movie.id}/cast/top`, (c) => c.json(movie.top_cast));
});

app.all("*", (c) => c.notFound());
app.onError((err, _) => new HTTPException(500, { message: err.message }).getResponse());

export default app;
