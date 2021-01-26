
import Axios from 'axios';
let urls = {
    test: `http://localhost:3334`,
    development: `http://localhost:3333/`,
    production: `https://chafido.bondril13.dev/`
}

const api = Axios.create({
    baseUrl: `https://chafido.bondril13.dev/`,//urls[process.env.NODE_ENV],
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})

export default api;