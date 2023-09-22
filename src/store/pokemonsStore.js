import { atom } from 'nanostores';

export const selectedPokemon = atom([]);

export const selectPokemon = ($pokemon) =>{
    selectedPokemon.set($pokemon)
}