import { useEffect, useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import ProductCard from './components/ProductCard';
import createNewProduct from './services/createNewProduct';
import deleteProduct from './services/deleteProduct';
import editProduct from './services/editProduct';
import getAllProducts from './services/getAllProducts';

function App() {

  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const [editDefValues, setEditDefValues] = useState({})
  const [editFormRes, setEditFormRes] = useState({})

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
    const filterProduct = (id) => {
      const newArr = products.filter((product) => id !== product.id)
      return newArr
    }
    if(deleteId){
      deleteProduct(deleteId)
        .then(() => {
          setProducts(filterProduct(deleteId))
        })
    } 
  }, [deleteId, products])

  useEffect(() => {
    const filterProduct = (id) => {
      const newArr = products.filter((product) => id !== product.id)
      return newArr
    }
    if(editFormRes.id){
      editProduct(editFormRes.id, editFormRes)
        .then((res) => {
          console.log(res.data)
          setProducts([res.data, ...filterProduct(editFormRes.id)])
          setEditFormRes({})
        })
    }
  }, [editFormRes, products])

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
  const handlerOnEdit = (obj) => {
    setEditDefValues(obj)
  }

  const handlerOnEditProduct = (data) => {
    setEditFormRes(data)
  }

  const productList = products.map((item) => <ProductCard productObj={item} onDelete={handlerOnDelete} onEdit={handlerOnEdit} key={item.id} />)

  return (
    <div className="App">
      <header className="App-header">
        <EditForm onEdit={handlerOnEditProduct} defValues={editDefValues} />
        <button onClick={() => setDisplayForm(!displayForm)} >Crear nuevo producto</button>
        {displayForm && <CreateForm onCreate={handlerOnCreateProduct} />}
        {productList}
      </header>
    </div>
  );
}

export default App;
