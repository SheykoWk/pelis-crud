import axios from "axios";

const createNewMovie = async (data) => {
    const URL = 'https://movies-crud-academlo.herokuapp.com/movies/';
    const req = await axios.post(URL, data);
    return req
}

export default createNewMovie