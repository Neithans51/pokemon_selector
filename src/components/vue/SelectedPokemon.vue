<script setup>
    import { selectedPokemon } from '../../store/pokemonsStore.js'
    import { useStore } from '@nanostores/vue';

    const $selectedPokemon = useStore(selectedPokemon);

    const changeSprite = (src) =>{
        const main_sprite = document.getElementById('main-sprite');
        main_sprite.src = src;
    }
</script>

<template>
    <section class="section-selected-pokemon">
        <img v-if="$selectedPokemon.length == 0" src="../../../public/poke_ball_close.svg" alt="pokeball" class="pokeball">
        <div v-else class="selected-container">
            <h1>{{$selectedPokemon[0]}}</h1>
            <div class="sprite-containers">
                <div class="select-sprite">
                    <img @click="changeSprite($selectedPokemon[1])" :src="`${$selectedPokemon[1]}`" :alt="$selectedPokemon[0]">
                </div>
                <div class="select-sprite">
                    <img @click="changeSprite($selectedPokemon[2])" :src="`${$selectedPokemon[2]}`" :alt="$selectedPokemon[0]">
                </div>
            </div>
            <img :src="`${$selectedPokemon[1]}`" :alt="`${$selectedPokemon[0]}`" id="main-sprite" class="w-full">
        </div>
    </section>
</template>

<style scoped>
    h1{
        @apply text-white text-center font-bold text-3xl;
    }

    .sprite-containers{
        @apply flex justify-center gap-5;
    }
    .select-sprite{
        @apply p-1 border-2 border-black bg-[#5C469C] rounded-xl w-20;
        transition: transform .2s;
    }

    .select-sprite:hover{
        cursor: pointer;
        transform: scale(1.3);
    }
    .section-selected-pokemon{
        @apply w-1/2 my-5;
    }

    .selected-container{
        @apply flex flex-col;
    }

    .pokeball{
        animation: pokeball infinite 2s;
    }

    @keyframes pokeball{
        0% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
    }
</style>