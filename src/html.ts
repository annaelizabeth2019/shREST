import { movies, Movie } from "./movies";

var html = `<!DOCTYPE html>
    <html lang="en">
    <link rel="stylesheet" href="/public/styles.css">
    <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5559360369279993"
     crossorigin="anonymous"></script>
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
</html>` // this is the base HTML before we have data

// this function excludes route documentation for movies that don't have quotes yet (Shrek 5: 2026)
const getTableRowForMovieRoutes = (movie: Movie) => {
    if (movie.quotes.length) {
        return `
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
                                    href="/${movie.id}/cast/top">Get Top
                                    Cast for ${movie.name}</a></li>
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
                `
    }
    return `
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
                                    href="/${movie.id}/cast/top">Get Top
                                    Cast for ${movie.name}</a></li>
                            </li>
                        </ul>
                    </td>
                </tr>
                `
}
if (movies.length > 0) {
    // update the HTML with each movie
    html = `<!DOCTYPE html>
<html lang="en">

<head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5559360369279993"
     crossorigin="anonymous"></script>
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

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5559360369279993"
     crossorigin="anonymous"></script>
    <!-- donkey -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-5559360369279993"
        data-ad-slot="5215007157"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>

    <main class="container">
        <h2>Endpoints</h2>
        <text>See below for detailed routes for each movie and movie_ids.</text>
        <table>
            <thead>
                <tr>
                    <th scope="col">Endpoint</th>
                    <th scope="col">Description</th>
                    <th scope="col">Response (may change in the future)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code><strong>GET</strong> /movies</code>
                    </td>
                    <td>
                        <a href="/movies"> List Movies</a>
                    </td>
                    <td>
                        <code><pre>[
    {
    "name": "Shrek",
    "id": 0, //number: this is the :id to use in the routes
    "attributes": {
        "quotes_length": 98, // number
        top_cast_length: 20, // number
        year: 2001 // number
        }
    },
    {
        // ...
    },
]</pre></code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><strong>GET</strong> /quotes/random</code>
                    </td>
                    <td><a href="/quotes/random"> Random Quote from Any Movie</a></td>
                    <td>
                        <pre><code>"Shrek: Donkey, two things okay? Shut... up!" // string</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><strong>GET</strong> /:movie_id</code>
                    </td>
                    <td> <text>
                            Get All Items for Movie
                        </text>
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
                        <code><strong>GET</strong> /:movie_id/cast/top</code>
                    </td>
                    <td>
                        <text>
                            Get Top Cast for Movie
                        </text>
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
                        <code><strong>GET</strong> /:movie_id/quotes</code>
                    </td>
                    <td>
                        <text>
                            Get All Quotes for Movie
                        </text>
                    </td>
                    <td>
                        <pre><code>["quote 1", "quote 2", ...] // array of strings</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><strong>GET</strong> /:movie_id/quotes/random</code>
                    </td>
                    <td>
                        <text>
                            Get a Random Quote from A Movie as JSON
                        </text>
                    </td>
                    <td>
                        <pre><code>The Donkey: All right, I hope you heard that? She called me a \"noble steed.\" She thinks I'm a steed. // string</code></pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code><strong>GET</strong> /:movie_id/quotes/random/text</code>
                    </td>
                    <td>
                        <text>
                            Get a Random Quote from the movie as Text
                        </text>
                    </td>
                    <td>
                        <pre><code>Shrek: That'll do, Donkey. That'll do.</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>
            Extended Route Information for Each Shrek
        </h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">Movie</th>
                    <th scope="col">ID</th>
                    <th scope="col">Endpoints</th>
                </tr>
            </thead>
            <tbody>
                ${movies.map(movie => getTableRowForMovieRoutes(movie)).join('')}
            </tbody>
        </table>
    </main>
    <footer>
        <p>© 2024 shREST API. All rights reserved.</p>
    </footer>
</body>

</html>`;
}

export default html