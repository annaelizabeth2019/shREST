import data from "./data.json";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

const app = new Hono();

app.use("*", cors());

for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const movie = data[key as keyof typeof data]
        const quotes = movie.quotes
        const getRandomQuote = (): string => {
            const index = Math.floor(Math.random() * quotes.length);
            return quotes[index];
        };
        app.all(`/${key}/`, (c) => c.json({ quote: getRandomQuote() }));
        app.all(`/${key}/text`, (c) => c.text(getRandomQuote()));
        app.all(`/${key}/quotes`, (c) => c.json(quotes));
    }
}

app.all("*", (c) => c.notFound());
app.onError((err, _) =>
    new HTTPException(500, { message: err.message }).getResponse()
);

export default app;