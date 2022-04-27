import { useForm } from 'react-hook-form'

const CreateForm = ({ onCreate }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (res) => {
        console.log(res)
        onCreate(res)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name' >Name</label>
            <input id='name' {...register('name')} />
            <br/>
            <label htmlFor='category' >Category</label>
            <input id='category' {...register('category')} />
            <br/>
            <label htmlFor='price' >Price</label>
            <input id='price' {...register('price')} />
            <br/>
            <label htmlFor='isAvailable' >Is Available</label>
            <input id='isAvailable' type='checkbox' {...register('isAvailable')} />
            <br/>
            <input type='submit' value='enviar' />
        </form>
    )
}

export default CreateForm