import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://evening-river-12500.herokuapp.com/'
})

export default instance