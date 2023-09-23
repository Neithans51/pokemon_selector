<script setup>
    import PokemonCard from './PokemonCard.vue';
    import { selectPokemon } from '../../store/pokemonsStore.js';

    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
	const data = await response.json();
	const pokemonsData = data.results;
</script>

<template>
    <section class="section-menu-selector">
        <div v-for="pokemon in pokemonsData">
            <PokemonCard 
                :name="pokemon.name"
            />
        </div>
        <div @click="selectPokemon([' sendo chiguire', '../../../public/capybara_pixel.png', '../../../public/capybara_pixel.png'])" id="chiguire">
			<img src="../../../public/capybara_pixel.png" alt="sendo chiguire">
		</div>
    </section>
</template>

<style scoped>
    #chiguire{
        @apply p-1 border-2 border-black bg-[#5C469C] rounded-xl;
        transition: transform .2s;
    }

    #chiguire:hover{
        cursor: pointer;
        transform: scale(1.3);
    }
    .section-menu-selector{
        @apply grid grid-cols-5 max-w-xl gap-4 my-5;
    }
</style>