import { useForm } from 'react-hook-form'

const CreateForm = ({ onCreate }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (res) => {
        onCreate(res)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name' >Name</label>
            <input id='name' {...register('name')} />
            <br/>
            <label htmlFor='genre' >Genre</label>
            <input id='genre' {...register('genre')} />
            <br/>
            <label htmlFor='duration' >Duration</label>
            <input id='duration' {...register('duration')} />
            <br/>
            <label htmlFor='date' >Release date</label>
            <input id='date' type='date' {...register('release_date')} />
            <br/>
            <input type='submit' value='enviar' />
        </form>
    )
}

export default CreateForm