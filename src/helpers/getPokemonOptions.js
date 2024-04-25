



const getPokemons = () => {
    const pokemosArr = Array.from(Array(649))
    
    return pokemosArr.map( ( _ , index ) => index + 1 )
}


const getPokemonOptions = () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

    getPokemonName( mixedPokemons.splice(0,4))
}

const  getPokemonName = ( [A,B,C,D] = [] ) => {

    console.log(A,B,C,D);

}


export default getPokemonOptions;