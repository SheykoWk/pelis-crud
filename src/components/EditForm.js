import { useForm } from "react-hook-form"

const EditForm = ({defValues}) => {

    console.log(defValues)

    const defaultValues = {
        name: defValues.name,
        category: defValues.category,
        price: defValues.price,
        isAvailable: defValues.isAvailable
    }

    const {register, handleSubmit} = useForm({
        defaultValues: defaultValues
    })
    
    const onSubmit = () => {
        console.log('funciona')
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input id="name"  {...register('name')} />
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