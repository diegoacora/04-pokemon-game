<template>
  <div class="content">
    <div class="options-container">
      <ul>
        <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('selection', pokemon.id)"
        >
          {{ pokemon.name }}
        </li>
      </ul>
      <!-- <input class="butonRec" type="button" value="Reintentar" onclick="location.reload()"> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  list-style: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(69, 212, 255, 0.5);
}

.content {
  display: flex;
  justify-content: center;
}

.options-container {
  height: 15vw;
  width: 400px;
  display: flex;
  justify-content: center;
}
</style>
