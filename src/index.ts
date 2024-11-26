import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { serveStatic } from "hono/serve-static";
import { getRandomMovieForQuote, getRandomQuote, movies } from "./movies";
import html from "./html";
import styles from "./styles";

type Bindings = {
    assets: R2Bucket
}

const app = new Hono<{ Bindings: Bindings }>();

// serve CSS styling
app.all('/public/styles.css', serveStatic({
    // path: "./assets/styles.css",
    getContent: async (path: string, c: Context) => {
        try {
            return new Response(styles, {
                status: 200,
                headers: {
                    'Content-Type': 'text/css',
                }
            });
        } catch (err) {
            return new Response("File not found", { status: 404 });
        }
    }
}));

// serves the icon 
app.get('/public/icon.png', async (c) => {
    const bucket = c.env.assets
    try {
        const object = await bucket.get("icon.png")
        if (!object) {
            return c.text('File not found', 404);
        }

        return c.body(await object.arrayBuffer(), 200, {
            'Content-Type': 'image/png',
        });
    } catch (err) {
        console.error(err);
        return c.text('Error fetching file', 500);
    }
});

app.use("*", cors());

app.get("/", (c) => c.html(html));

app.get("/quotes/random", (c) => c.json(getRandomQuote(getRandomMovieForQuote())));
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
    if (movie.quotes.length) {
        app.get(`/${movie.id}/quotes/random`, (c) => c.json(getRandomQuote(movie.id)));
        app.get(`/${movie.id}/quotes/random/text`, (c) => c.text(getRandomQuote(movie.id)));
        app.get(`/${movie.id}/quotes`, (c) => c.json(movie.quotes));
    }
    if (movie.top_cast.length) {
        app.get(`/${movie.id}/cast/top`, (c) => c.json(movie.top_cast));
    }
});

app.all("*", (c) => c.notFound());
app.onError((err, _) => new HTTPException(500, { message: err.message }).getResponse());

export default app;
