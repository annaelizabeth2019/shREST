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

// Initialize movies array from data
const movies: Movie[] = Object.values(data);

// Get movies that have quotes
const getMoviesWithQuotes = (): Movie[] => movies.filter(movie => movie.quotes.length > 0);

// Get a random movie that has quotes
const getRandomMovieForQuote = (): number => {
    const moviesWithQuotes = getMoviesWithQuotes();
    const randomIndex = Math.floor(Math.random() * moviesWithQuotes.length);
    return moviesWithQuotes[randomIndex].id;
};

// Get a random quote from a specific movie
const getRandomQuote = (movieId: number): string => {
    const movie = movies.find(m => m.id === movieId);
    if (!movie || movie.quotes.length === 0) {
        return "";
    }
    const randomIndex = Math.floor(Math.random() * movie.quotes.length);
    return movie.quotes[randomIndex];
};

export { getRandomMovieForQuote, getRandomQuote, movies };