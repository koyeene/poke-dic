import React from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({ pokemonList, deletePokemon, togglePokemon }) {
   return (
      <div className="pokemon-list">
         {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} deletePokemon={deletePokemon} togglePokemon={togglePokemon} />
         ))}
      </div>
   )
}

export default PokemonList
