import './App.css'
import { useState } from 'react'
import { Movie } from './interfaces';

import SearchMovies from './components/SearchMovies/SearchMovies'
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <main>
      <SearchMovies setMovies={ setMovies } />
      <DisplayMovies movies={ movies } />
    </main>
  )
}

export default App
