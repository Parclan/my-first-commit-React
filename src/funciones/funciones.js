import axios from 'axios'

const todosPersonajes = async (state) => {
    const peticion = axios.get('https://rickandmortyapi.com/api/character')
    state((await peticion).data.results)
} 

export {
    todosPersonajes
}