import data from "./data.json";
import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { serveStatic } from "hono/serve-static";

type Movie = {
    id: number,
    name: string;
    year: number;
    top_cast: {
        name: string;
        characters: string[];
    }[];
    quotes: string[];
};

const app = new Hono();

var movies: Movie[] = [];
var html = `<!DOCTYPE html>
    <html lang="en">
    <link rel="stylesheet" href="/public/styles.css">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>shREST</title>
    </head>
    <body>
        <h1>Welcome to shREST</h1>
        <h3>Shrek Rest API</h3>
        <p>Use the following endpoints to get random movie quotes:</p>
        <ul>
            <li><a href="/random">Get a random movie</a></li>
        </ul>
        <p>Available Movies:</p>
        <ul>
        </ul>
    </body>
</html>` // this is the base HTML before we have movies

/* Global Styles */
var styles = `body {
    font-family: 'Arial', sans-serif;
    background-color: #3E7A30;
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F671%2F413%2F121%2Fshrek-wallpaper-preview.jpg&f=1&nofb=1&ipt=7ed7ad88c49fdbb2a4ac9b5615a076767dc0c29485dd02a30617537270c58cc7&ipo=images');
    background-size: cover;
    background-position: center;
}

h1 {
    font-size: 3rem;
    margin: 0 20px;
    text-shadow: 2px 2px 4px #000;
}

p {
    font-size: 1.3rem;
    line-height: 1.7;
    margin-bottom: 20px;
    color: #FFE700; /* Slightly darker yellow for better contrast */
    text-shadow: 1px 1px 2px #000;
}

a {
    color: #FFE700;
    text-decoration: none;
    font-weight: bold;
    line-height: 1.7;
}

a:hover {
    text-decoration: underline;
    color: #9ACD32;
}

.container {
    width: 100%;
    max-width: 80%;
    padding: 20px;
    background-color: rgba(85, 107, 47, .8);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    margin: 20px;
}

.header-container {
    text-align: center; 
    margin-top: 60px;
    color: #FFB700;
}

.header-container h1 {
    font-size: 3rem;
    margin: 0; 
    text-shadow: 2px 2px 4px #000; 
}

.header-container p {
    font-size: 1.2rem; 
    line-height: 1.5; 
    color: #F5DEB3; 
}

footer {
    margin-top: 40px;
    font-size: 1rem;
    color: #FFE700; /* Consistent footer text color */
}

.styled-button {
    background-color: rgba(107, 142, 35, .8); /* Darker ogre green */
    color: #3E7A30; /* Darker text for contrast */
    padding: 15px 30px; 
    border: none;
    border-radius: 12px; 
    font-size: 1.6rem; 
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 0 20px rgba(107, 142, 35, .8), 0 0 30px rgba(107, 142, 35, .6); /* Glowing effect */
}

.styled-button:hover {
    background-color: rgba(107, 142, 35, 1); /* Slightly lighter gold on hover */
    transform: scale(1.05); 
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse; 
    margin: 20px 0;
    border: none;
}

th, td {
    border: 1px solid #556B2F; 
    padding: 12px; 
    text-align: left; 
}

th {
    background-color: rgba(107, 142, 35, 0.8); 
    color: #FFB700; 
    font-size: 1.2rem; 
}

td {
    background-color: rgba(255, 255, 255, 0.2); 
    color: #F5DEB3; /* Wheat-like color for better readability */
    font-size: 1rem; 
}

tr:nth-child(even) {
    background-color: rgba(107, 142, 35, 0.5); 
}

tr:hover {
    background-color: rgba(107, 142, 35, 0.3); 
}

/* Remove bullet points from lists */
ul {
    list-style: none; 
    padding: 0; 
    margin: 0; 
}

/* Responsive Styles */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem; 
    }

    p, a, .styled-button {
        font-size: 1rem; 
    }

    table {
        font-size: 0.9rem; 
    }

    th, td {
        padding: 10px; 
    }
}

/* Mobile Styles */
@media (max-width: 768px) {
    body {
        padding: 10px; /* Add padding to the body for mobile */
    }

    .header-container {
        text-align: center; /* Center align text in the header */
        margin: 10px 0; /* Adjust margin for mobile */
    }

    h1 {
        font-size: 2.5rem; /* Smaller font for smaller screens */
    }

    p, a, .styled-button {
        font-size: 1rem; /* Smaller font for paragraphs and links */
        margin: 10px 0; /* Add vertical margin for spacing */
    }

    .container {
        width: 100%; /* Ensure container uses full width */
        padding: 10px; /* Add padding for mobile */
        margin: 0; /* Remove margins for mobile */
    }

    table {
        width: 100%; /* Ensure tables use full width */
        font-size: 0.9rem; /* Smaller font size for table */
        margin: 10px 0; /* Add margin for spacing */
    }

    th, td {
        padding: 10px; /* Adjust padding for smaller screens */
    }

    tr:nth-child(even) {
        background-color: rgba(107, 142, 35, 0.4); /* Lighter green for even rows */
    }

    /* Add additional styling for the footer */
    footer {
        font-size: 0.9rem; /* Smaller footer font size */
        text-align: center; /* Center align footer text */
        margin: 20px 0; /* Add margin for spacing */
    }

    ul {
        padding-left: 20px; /* Indent list items */
        text-align: left; /* Align text to the left for better readability */
    }
}
`

// update the movies array with each movie
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const movie = data[key as keyof typeof data];
        const quotes = movie.quotes;
        const topCast = movie.top_cast;
        const getRandomQuote = (): string => {
            if (quotes.length == 0) {
                return "";
            }
            const index = Math.floor(Math.random() * quotes.length);
            return quotes[index];
        };

        movies.push(movie);
        app.all(`/${movie.id}`, (c) => c.json({ movie }));
        app.all(`/${movie.id}/quotes/random`, (c) => c.json({ quote: getRandomQuote() }));
        app.all(`/${movie.id}/quotes/random/text`, (c) => c.text(getRandomQuote()));
        app.all(`/${movie.id}/quotes`, (c) => c.json(quotes));
        app.all(`/${movie.id}/cast/top`, (c) => c.json(topCast));
    }
}

// update the HTML with each movie
html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/styles.css">
    <meta name="description" content="Explore the shREST API for Shrek movies and quotes.">
    <title>shREST</title>
</head>

<body>
    <header class="header-container">
        <h1>Welcome to shREST</h1>
        <p>A Shrek REST API</p>
        </header>
        <a href="/random" class="styled-button">RANDOM MOVIE QUOTE!</a>
    
    <main class="container">
        <h2>Endpoints</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Movie</th>
                    <th scope="col">ID</th>
                    <th scope="col">Endpoints</th>
                </tr>
            </thead>
            <tbody>
                ${movies.map(movie => `
                <tr>
                    <td><a href="/${movie.id}">
                            <h3>${movie.name}</h3>
                        </a></td>
                    <td>${movie.id}</td>
                    <td>
                        <ul>
                            <li><code><strong>GET</strong> /${movie.id}</code> <a href="/${movie.id}">Get All Items for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/cast/top</code> <a href="/${movie.id}/cast/top">Get Top Cast for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes</code> <a href="/${movie.id}/quotes">Get All Quotes for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes/random/text</code> <a href="/${movie.id}/quotes/random/text">Get Random Quote as Text for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes/random</code> <a href="/${movie.id}/quotes/random">Get Random Quote as JSON for ${movie.name}</a></li>
                        </ul>
                    </td>
                </tr>
                `).join('')}
            </tbody>
        </table>
        
        <h2>Responses</h2>
        <footer>Note: subject to change in the future</footer>
        
        <table>
            <thead>
                <tr>
                    <th scope="col">Endpoint</th>
                    <th scope="col">Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h3>All Items</h3>
                    </td>
                    <td>
                        <pre><code>{
"id": 0,
"name": "Shrek",
"year": 2001,
"top_cast": [
//see top cast response
],
"quotes": ["quote 1", "quote 2", ...] // array of strings
}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Get Top Cast</h3>
                    </td>
                    <td>
                        <pre><code>[
    {
        "name": "Mike Myers",
        "characters": [
            "Shrek",
            "Blind Mouse",
            "Opening Narration"
        ]
    },
    {
        // ...
    }
]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Get All Quotes</h3>
                    </td>
                    <td>
                        <pre><code>["quote 1", "quote 2", ...] // array of strings</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Get Random Quote as Text</h3>
                    </td>
                    <td>
                        <pre><code>Shrek: That'll do, Donkey. That'll do.</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Get Random Quote as JSON</h3>
                    </td>
                    <td>
                        <pre><code>{"quote":"The Donkey: All right, I hope you heard that? She called me a \"noble steed.\" She thinks I'm a steed."}</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
    
    <footer>
        <p>© 2024 shREST API. All rights reserved.</p>
    </footer>
</body>

</html>
`

const getRandomMovie = (): number => {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index].id;
};

const getRandomQuote = (id: number): string => {
    const quotes = movies[id].quotes
    if (quotes.length == 0) {
        return ""
    }
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

// Updated serveStatic middleware
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

app.all(`/random`, (c) => c.json(getRandomQuote(getRandomMovie())));

// Add a homepage route at the base path "/"
app.get("/", (c) => {
    return c.html(html);
});

app.all("*", (c) => c.notFound());
app.onError((err, _) =>
    new HTTPException(500, { message: err.message }).getResponse()
);

export default app;
