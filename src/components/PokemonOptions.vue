<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
                {{ pokemon.name }}
            </li>
        </ul>
        <!-- <input class="butonRec" type="button" value="Reintentar" onclick="location.reload()"> -->
    </div>
</template>

<script>
export default {
    name: 'PokemonOptions',
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
}
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
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

/* .butonRec {
    list-style: none;
    background-color: rgb(0, 174, 255);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 15px 10px;
    height: 110px;
} */
</style>