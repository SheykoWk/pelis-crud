import axios from "axios";

const getAllMovies = async() => {
    const URL = 'https://movies-crud-academlo.herokuapp.com/movies/';
    const req = await axios.get(URL)
    return req
}

export default getAllMovies