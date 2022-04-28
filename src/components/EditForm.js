import { useForm } from "react-hook-form"

const EditForm = () => {

    const {register, handleSubmit} = useForm()

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" {...register('name')} />
            <br/>
            <label htmlFor="category" >Category</label>
            <input id="category" {...register('category')} />
            <br/>
            <label htmlFor="price" >Price</label>
            <input id="price" {...register('price')} />
            <br/>
            <label htmlFor="is_available" >Is Available</label>
            <input id="is_available" type='checkbox' {...register('isAvailable')} />
            <br/>
            <input type='submit' value='Editar' />
        </form>
    )
}

export default EditForm