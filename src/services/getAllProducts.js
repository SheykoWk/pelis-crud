import axios from "axios";

const getAllProducts = async() => {
    const URL = 'https://products-app-academlo.herokuapp.com/products/';
    const req = await axios.get(URL)
    return req
}

export default getAllProducts