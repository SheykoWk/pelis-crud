import axios from "axios";

const editProduct = async (id, prodObj) => {
    const URL = `https://products-app-academlo.herokuapp.com/products/${id}/`;
    const req = await axios.put(URL, prodObj)
    return req
}

export default editProduct