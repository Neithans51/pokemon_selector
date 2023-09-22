<script setup>
    import { selectPokemon } from '../../store/pokemonsStore.js';

    const props = defineProps({
        name: {type: String, default: ''}
    })   

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    const data = await response.json();
    const pokemon = data;
</script>

<template>
    <div @click="selectPokemon([pokemon.name, pokemon.sprites.front_default, pokemon.sprites.front_shiny])">
        <img :src="`${pokemon.sprites.front_default}`" :alt="pokemon.name">
    </div>
</template>

<style scoped>
    div{
        @apply p-1 border-2 border-black bg-[#5C469C] rounded-xl;
        transition: transform .2s;
    }

    div:hover{
        cursor: pointer;
        transform: scale(1.3);
    }
</style>