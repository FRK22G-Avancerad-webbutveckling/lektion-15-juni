import { useState } from "react";
import { Movie } from "../../interfaces";

interface Response {
    Response: string,
    Search: Movie[],
    totalResults: string
}

interface SearchMoviesProps {
    setMovies: (movies: Movie[]) => void // Enbart beskriver hur funktioner ser ut, vad den tar emot och vad den returnerar
}

function SearchMovies({ setMovies }: SearchMoviesProps) { // Samma som nedan
    const [searchQuery, setSearchQuery] = useState<string>('');
    //const { setMovies } = props; // Object destructuring, vi plockar ut en eller flera egenskaper från ett objekt, i detta fall props 
    

    async function handleClick() {
        const response = await fetch(`http://www.omdbapi.com/?apikey=37fe945a&s=${searchQuery}`);
        const data: Response = await response.json();

        setMovies(data.Search);
    }

    return (
        <section>
            <input type="text" 
            onChange={ (event) => { setSearchQuery(event.target.value) }} />
            <button onClick={ handleClick }>Sök</button>
        </section>
    )
}

export default SearchMovies;