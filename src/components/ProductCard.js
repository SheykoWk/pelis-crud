const ProductCard = ({productObj, onDelete}) => {
    return(
        <div>
            <h1>{productObj.name}</h1>
            <p>{productObj.id}</p>
            <span>
                <button onClick={() => onDelete(productObj.id)} >Eliminar</button>
            </span>
        </div>
    )
}

export default ProductCard