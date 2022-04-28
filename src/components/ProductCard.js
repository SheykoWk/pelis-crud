const ProductCard = ({productObj, onDelete, onEdit}) => {
    return(
        <div>
            <h1>{productObj.name}</h1>
            <p>{productObj.id}</p>
            <span>
                <button onClick={() => onDelete(productObj.id)} >Eliminar</button>
                <button onClick={() => onEdit(productObj)}>Editar</button>
            </span>
        </div>
    )
}

export default ProductCard