import axios from 'axios'


const menuApi = axios.create({
    baseURL: 'http://189.161.47.12:8089'
})

export default menuApi