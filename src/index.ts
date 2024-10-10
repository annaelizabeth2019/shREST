import data from "./data.json";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

const app = new Hono();
var movies: Movie[] = []
type Movie = {
    id: number,
    name: string;
    year: number;
    top_cast: {
        name: string;
        characters: string[];
    }[];
    quotes: string[];
}

app.use("*", cors());

for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const movie = data[key as keyof typeof data]
        const quotes = movie.quotes
        const topCast = movie.top_cast
        const getRandomQuote = (): string => {
            if (quotes.length == 0) {
                return ""
            }
            const index = Math.floor(Math.random() * quotes.length);
            return quotes[index];
        };

        movies.push(movie)
        app.all(`/${movie.id}`, (c) => c.json({ movie }));
        app.all(`/${movie.id}/quotes/random`, (c) => c.json({ quote: getRandomQuote() }));
        app.all(`/${movie.id}/quotes/random/text`, (c) => c.text(getRandomQuote()));
        app.all(`/${movie.id}/quotes`, (c) => c.json(quotes));
        app.all(`/${movie.id}/cast/top`, (c) => c.json(topCast));
    }
}

const getRandomMovie = (): number => {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index].id;
};

app.all(`/random`, (c) => c.json(movies[getRandomMovie()]))

// Add a homepage route at the base path "/"
app.get("/", (c) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie Quotes API</title>
    </head>
    <body>
        <h1>Welcome to the Movie Quotes API</h1>
        <p>Use the following endpoints to get random movie quotes:</p>
        <ul>
            <li><a href="/random">Get a random movie</a></li>
        </ul>
        <p>Available Movies:</p>
        <ul>
            ${movies.map(movie => `<li><a href="/${movie.id}">${movie.name}</a></li>
                <ul>
                    <li><a href="${movie.id}/cast/top">Get top cast and their characters from ${movie.name} in JSON</a></li>
                    <li><a href="${movie.id}/quotes">Get all quotes from ${movie.name} in JSON</a></li>
                    <li><a href="${movie.id}/quotes/random/text">Get a random quote from a ${movie.name} as text</a></li>
                    <li><a href="${movie.id}/quotes/random">Get a random quote from ${movie.name} as JSON</a></li>`).join('')}
                </ul>
        </ul>
    </body>
    </html>
    `;
    return c.html(html);
});

app.all("*", (c) => c.notFound());
app.onError((err, _) =>
    new HTTPException(500, { message: err.message }).getResponse()
);

export default app;