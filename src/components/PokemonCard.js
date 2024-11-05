import React from 'react'
// import './PokemonCard.css'

function PokemonCard({ pokemon, deletePokemon, togglePokemon }) {
   const { name, img, isActive } = pokemon

   return (
      <div className={`pokemon-card ${isActive ? '' : `inactive`}`} onDoubleClick={() => togglePokemon(name)}>
         <img src={img} alt={name} style={{ filter: isActive ? 'none' : 'grayscale(100%)' }} />
         <h3 style={{ color: isActive ? '#000' : '#aaa' }}>{name}</h3>
         <button onClick={() => deletePokemon(name)}>삭제</button>
      </div>
   )
}

export default PokemonCard
