<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPicture="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

    <!-- <h3 class="correcto" v-if="pokemonCorrecto">GANASTE!!!</h3>
    <h3 class="incorrecto" v-if="pokemonIncorrecto">PERDISTE!!!</h3> -->

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ msm }}</h2>
      <button @click="newGame" class="butonRec">Nuevo Juego</button>
    </template>
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      // pokemonCorrecto: false,
      // pokemonIncorrecto: false
      showAnswer: false,
      msm: ''

    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const idA = parseInt(Math.random() * 4)
      this.pokemon = this.pokemonArr[idA]

    },
    checkAnswer(pokemonID) {
      // console.log('pokemon seleccionado', pokemonID)
      // this.pokemonCorrecto = pokemonID === this.pokemon.id ? true : false
      // this.pokemonIncorrecto = pokemonID !== this.pokemon.id ? true : false
      // this.showPokemon = pokemonID === this.pokemon.id ? true : false

      this.showPokemon = true
      this.showAnswer = true
      
      if( pokemonID === this.pokemon.id){
        this.msm = `Correcto, ${this.pokemon.name}`
      }else{
        this.msm = `Oops, era ${this.pokemon.name}`
      }

    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.pokemonArr = []
      this.mixPokemonArray()
    }

  },
  mounted() {
    this.mixPokemonArray()
  }
}

</script>

<style scoped>
/* .correcto {
  color: rgb(0, 255, 0);
}

.incorrecto {
  color: rgb(253, 6, 6);
} */

.butonRec {
    list-style: none;
    background-color: rgb(0, 174, 255);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-size: 18px;
}
</style>