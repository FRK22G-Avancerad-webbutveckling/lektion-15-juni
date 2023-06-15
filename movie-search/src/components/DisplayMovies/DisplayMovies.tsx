import { Movie } from "../../interfaces"

import MovieCard from "../MovieCard/MovieCard"

interface DisplayMoviesProps {
    movies: Movie[]
}

function DisplayMovies({ movies }: DisplayMoviesProps) {
    
    const movieCardComponents = movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.imdbID } />
    });

    return (
      <section>
        { movieCardComponents }
      </section>
    )
  }
  
  export default DisplayMovies