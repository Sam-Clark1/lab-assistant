import axios from "axios";

export default axios.create({
    baseURL: 'https://lab-assistant-backend.herokuapp.com/api/auth/'
})