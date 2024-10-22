import data from "./data.json";

export type Movie = {
    id: number,
    name: string;
    year: number;
    top_cast: {
        name: string;
        characters: string[];
    }[];
    quotes: string[];
};
var movies: Movie[] = [];

// update the movies array with each movie
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const movie = data[key as keyof typeof data];
        const quotes = movie.quotes;
        const topCast = movie.top_cast;
        movies.push(movie);
    }
}


const getRandomMovieForQuote = (): number => {
    var values: number[] = []
    movies.forEach((m, i) => {
        if (m.quotes.length) {
            console.log(m.id, i)
            values.push(i)
        }
    })
    const index = Math.floor(Math.random() * values.length);
    console.log(index, "values", values)
    return values[index];
};
const getRandomQuote = (id: number): string => {
    const quotes = movies[id].quotes
    if (quotes.length == 0) {
        return ""
    }
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

export { getRandomMovieForQuote, getRandomQuote, movies }