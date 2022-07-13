import Axios from "axios";
export default Axios.create({
    baseURL:'https://server-apirest.herokuapp.com/api/'
})