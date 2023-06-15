import { Movie } from "../../interfaces";

interface MovieCardProps {
    movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
    return (
        <article>
            <img src={ movie.Poster } />
            <h2>Titel: { movie.Title }</h2>
            <p>Utgiven: { movie.Year }</p>
        </article>
    )
}

export default MovieCard;