import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {
  const pokemosArr = Array.from(Array(649))

  return pokemosArr.map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons()
                            .sort(() => Math.random() - 0.5)

  const pokemons = await getPokemonName(mixedPokemons.splice(0, 4))

  return pokemons

}

const getPokemonName = async ([A, B, C, D] = []) => {
  const arrPromise = [
    pokemonApi.get(`/${A}`),
    pokemonApi.get(`/${B}`),
    pokemonApi.get(`/${C}`),
    pokemonApi.get(`/${D}`),
  ]

  const [p1, p2, p3, p4] = await Promise.all(arrPromise)

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

export default getPokemonOptions
