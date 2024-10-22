import data from "./data.json";

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

export { getRandomMovie, getRandomQuote, movies }