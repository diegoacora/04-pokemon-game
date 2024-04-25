<template>

    <div class="pokemon-container">

        <img :src="imgSrc"
            class="hidden-pokemon" alt="pokemon">

        <img :src="imgSrc"
            class="fade-in" 
            v-if="showPicture"
            alt="pokemon">

    </div>

</template>

<script>

export default {
    name: 'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPicture: {
            type: Boolean,
            required: true,
            default: false
        }
    },


    computed: {
        imgSrc() {

            // let min = 1
            // let max = 649
            // let idAleatorio = Math.random() * (max - min) + min;

            // let idImg = parseInt(idAleatorio)

            let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            
            return url
        }
    }
};

</script>

<style scoped>
.pokemon-container {
    height: 200px;
}

img {
    height: 200px;
    position: absolute;
    right: 32%;
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