<script setup>
    import PokemonCard from './PokemonCard.vue';

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
    </section>
</template>

<style scoped>
    .section-menu-selector{
        @apply grid grid-cols-5 max-w-xl gap-4 my-5;
    }
</style>