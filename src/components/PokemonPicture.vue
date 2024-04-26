<template>
  <div class="content">
    <div class="pokemon-container">
      <img
        :src="imgSrc"
        class="hidden-pokemon"
        v-if="!showPicture"
        alt="pokemon"
      />
      <img :src="imgSrc"
            class="fade-in" 
            v-else alt="pokemon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPicture: {
      type: Boolean,
      required: true,
      default: false,
    },
    // pokemons: {
    //     type: Array,
    //     required: true
    // }
  },
  computed: {
    imgSrc() {
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;

      return url;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}

.pokemon-container {
  height: 15vw;
  width: 400px;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
