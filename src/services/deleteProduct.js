import axios from "axios";

const deleteProduct = async (id) => {
    const URL = `https://products-app-academlo.herokuapp.com/products/${id}`;
    const req = await axios.delete(URL);
    return req
}

export default deleteProduct