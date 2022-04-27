import axios from "axios";

const createNewProduct = async (data) => {
    const URL = 'https://products-app-academlo.herokuapp.com/products/';
    const req = await axios.post(URL, data);
    return req
}

export default createNewProduct