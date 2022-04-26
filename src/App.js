import { useEffect, useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import MovieCard from './components/MovieCard';
import createNewMovie from './services/createNewMovie';
import getAllMovies from './services/getAllMovies';

function App() {

  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState({})

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        console.log(response.data)
        setMovies(response.data)
      })
  }, [])


  useEffect(() => {
    if(newMovie.name ){
      createNewMovie(newMovie)
        .then((res) => {
          console.log(res.data)
          setMovies([...movies, res.data])
          setNewMovie({})
        })
    } else {
      console.log('no hay valores para hacer un post')
    }
  }, [newMovie, movies])
  

  const movieList = movies.map((item) => <MovieCard movieObj={item} key={item.id} />)

  const handlerOnCreateMovie = (event) => {
    setNewMovie(event)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CreateForm onCreate={handlerOnCreateMovie} />
        {movieList}
      </header>
    </div>
  );
}

export default App;
