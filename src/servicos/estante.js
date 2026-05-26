import axios from 'axios';

const estanteAPI = axios.create({baseURL: 'http://localhost:8000/estante'})

async function getEstante() {
    const response = await estanteAPI.get('/')

    return response.data
}



export {
    getEstante,
}