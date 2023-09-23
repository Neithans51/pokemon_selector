import { atom } from 'nanostores';

export const selectedPokemon = atom([]);

export const selectPokemon = ($pokemon) =>{
    if(document.querySelector('.pokeball')){
        const pokeball = document.querySelector('.pokeball');
        pokeball.className = 'animate-ping';
        
        setTimeout(() => {
            selectedPokemon.set($pokemon);
        }, 500)
    }else{
        selectedPokemon.set($pokemon)
    }
}