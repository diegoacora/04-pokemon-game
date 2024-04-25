<template>
    <h1>¿Quién es este pokémon?</h1>
   
    <PokemonPicture :pokemonId="6" :showPicture="false"/>
    <PokemonOptions />

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  components: { PokemonPicture, PokemonOptions }
}

getPokemonOptions()

</script>