import React, { useState } from 'react'

function PokemonForm({ addPokemon }) {
   const [name, setName] = useState('')
   const handleSubmit = (e) => {
      e.preventDefault()
      if (name.trim()) {
         addPokemon(name.trim())
         setName('')
      } else {
         alert('포켓몬 이름을 입력하세요')
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="포켓몬 이름" value={name} onChange={(e) => setName(e.target.value)} />
         <button type="submit">등록</button>
      </form>
   )
}

export default PokemonForm
