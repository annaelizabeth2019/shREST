import { movies } from "./movies";

var html = `<!DOCTYPE html>
    <html lang="en">
    <link rel="stylesheet" href="/public/styles.css">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>shREST</title>
    </head>
    <body>
        <h1>shREST</h1>
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

if (movies.length > 0) {
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
        <h1>shREST</h1>
        <p>A Shrek REST API</p>
    </header>
    <a href="/quotes/random" class="styled-button">RANDOM MOVIE QUOTE!</a>

    <main class="container">
        <h2>Endpoints</h2>
        <table>
            <tbody>
                <tr>
                    <td>
                        <code><strong>GET</strong> /movies</code> <a href="/movies">List All Movies</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>
                            <strong>GET</strong> /quotes/random 
                        </code><a href="/quotes/random">Get A Random Quote</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
                            <li><code><strong>GET</strong> /${movie.id}</code> <a href="/${movie.id}">Get All Items for
                                    ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/cast/top</code> <a
                                    href="/${movie.id}/cast/top">Get Top Cast for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes</code> <a href="/${movie.id}/quotes">Get
                                    All Quotes for ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes/random/text</code> <a
                                    href="/${movie.id}/quotes/random/text">Get Random Quote as Text for
                                    ${movie.name}</a></li>
                            <li><code><strong>GET</strong> /${movie.id}/quotes/random</code> <a
                                    href="/${movie.id}/quotes/random">Get Random Quote as JSON for ${movie.name}</a>
                            </li>
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
`;
}

export default html