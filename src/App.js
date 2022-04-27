import { useEffect, useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import ProductCard from './components/ProductCard';
import createNewMovie from './services/createNewMovie';
import deleteMovie from './services/deleteMovie';
import getAllProducts from './services/getAllProducts';

function App() {

  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState({})
  const [deleteId, setDeleteId] = useState('')


  useEffect(() => {
    getAllProducts()
      .then((response) => {
        console.log(response.data)
        setMovies(response.data)
      })
  }, [])


  useEffect(() => {
    if(newMovie.name){
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

  useEffect(() => {
    if(deleteId){
      deleteMovie(deleteId)
        .then((response) => {
          console.log(response)
        })
    } 
  }, [deleteId])

  const handlerOnCreateMovie = (event) => {
    setNewMovie(event)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
    console.log('este es mi id desde la app',id)
  }

  const productList = movies.map((item) => <ProductCard productObj={item} onDelete={handlerOnDelete} key={item.id} />)

  return (
    <div className="App">
      <header className="App-header">
        <CreateForm onCreate={handlerOnCreateMovie} />
        {productList}
      </header>
    </div>
  );
}

export default App;
