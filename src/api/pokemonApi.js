import axios from 'axios'


const pokemopnApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemopnApi