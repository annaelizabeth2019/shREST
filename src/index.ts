import data from "./data.json";

import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

const app = new Hono();
var movies: string[] = []

app.use("*", cors());

for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const movie = data[key as keyof typeof data]
        const quotes = movie.quotes
        const topCast = movie.top_cast
        const getRandomQuote = (): string => {
            const index = Math.floor(Math.random() * quotes.length);
            return quotes[index];
        };

        movies.push(`${key}`)
        app.all(`/${key}`, (c) => c.json({ movie }));
        app.all(`/${key}/quotes/random`, (c) => c.json({ quote: getRandomQuote() }));
        app.all(`/${key}/quotes/random/text`, (c) => c.text(getRandomQuote()));
        app.all(`/${key}/quotes`, (c) => c.json(quotes));
        app.all(`/${key}/cast/top`, (c) => c.json(topCast));
    }
}

const getRandomMovie = (): keyof typeof data => {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index] as keyof typeof data;
};

app.all(`/random`, (c) => c.json(data[getRandomMovie()]))

app.all("*", (c) => c.notFound());
app.onError((err, _) =>
    new HTTPException(500, { message: err.message }).getResponse()
);

export default app;