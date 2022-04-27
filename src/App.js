import { useEffect, useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import ProductCard from './components/ProductCard';
import createNewProduct from './services/createNewProduct';
import deleteProduct from './services/deleteProduct';
import getAllProducts from './services/getAllProducts';

function App() {

  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({})
  const [deleteId, setDeleteId] = useState('')


  useEffect(() => {
    getAllProducts()
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)
      })
  }, [])


  useEffect(() => {
    if(newProduct.name){
      createNewProduct(newProduct)
        .then((res) => {
          console.log(res.data)
          setProducts([...products, res.data])
          setNewProduct({})
        })
    } else {
      console.log('no hay valores para hacer un post')
    }
  }, [newProduct, products])

  useEffect(() => {
    if(deleteId){
      deleteProduct(deleteId)
        .then(() => {
          setProducts(filterProduct(deleteId))
        })
    } 
  }, [deleteId])

  const filterProduct = (id) => {
    const newArr = products.filter((product) => id !== product.id)
    return newArr
  }

  const handlerOnCreateProduct = (event) => {
    setNewProduct(event)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
    console.log('este es mi id desde la app',id)
  }

  const productList = products.map((item) => <ProductCard productObj={item} onDelete={handlerOnDelete} key={item.id} />)

  return (
    <div className="App">
      <header className="App-header">
        <CreateForm onCreate={handlerOnCreateProduct} />
        {productList}
      </header>
    </div>
  );
}

export default App;
