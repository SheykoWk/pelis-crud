import axios from "axios";

const deleteMovie = async (id) => {
    const URL = `http://movies-crud-academlo.herokuapp.com/movies/${id}`;
    const req = await axios.delete(URL);
    return req
}

export default deleteMovie