import marillImg from './img/마릴.png'
import jirachiImg from './img/지라치.png'
import kyogreImg from './img/가이오가.png'
import OpenImg from './img/개무소.png'
import Meowscarada from './img/냐오닉스.png'
import Dolliv from './img/데굴레오.png'
import RilRil from './img/루리리.png'
import Manaphy from './img/마나피.png'
import Marill from './img/마릴리.png'
import Meloetta from './img/메로엣타.png'
import Celebi from './img/세레비.png'
import Chatot from './img/입치트.png'
import Pachirisu from './img/파치리스.png'
import Zorua from './img/조로아.png'
import Emolga from './img/전기날다람쥐.png'
import React, { useState } from 'react'
import PokemonList from './components/PokemonList'
import PokemonForm from './components/PokemonForm'
import './App.css'

function App() {
   const [pokemonList, setPokemonList] = useState([])

   // 포켓몬 추가
   const addPokemon = (name) => {
      if (pokemonList.find((pokemon) => pokemon.name === name)) {
         alert('이미 등록된 포켓몬입니다')
         return
      }

      let pokemonImage

      // 포켓몬 이름에 따라 이미지 할당
      switch (name) {
         case '마릴':
            pokemonImage = marillImg
            break
         case '지라치':
            pokemonImage = jirachiImg
            break
         case '가이오가':
            pokemonImage = kyogreImg
            break
         case '개무소':
            pokemonImage = OpenImg
            break
         case '냐오닉스':
            pokemonImage = Meowscarada
            break
         case '데굴레오':
            pokemonImage = Dolliv
            break
         case '루리리':
            pokemonImage = RilRil
            break
         case '마나피':
            pokemonImage = Manaphy
            break
         case '마릴리':
            pokemonImage = Marill
            break
         case '메로엣타':
            pokemonImage = Meloetta
            break
         case '세레비':
            pokemonImage = Celebi
            break
         case '입치트':
            pokemonImage = Chatot
            break
         case '파치리스':
            pokemonImage = Pachirisu
            break
         case '조로아':
            pokemonImage = Zorua
            break
         case '전기날다람쥐':
            pokemonImage = Emolga
            break
      }

      const newPokemon = {
         name,
         img: pokemonImage,
         isActive: true,
      }
      setPokemonList((prevList) => [...prevList, newPokemon])
   }

   // 포켓몬 삭제
   const deletePokemon = (name) => {
      setPokemonList(pokemonList.filter((pokemon) => pokemon.name !== name))
   }

   // 포켓몬 활성/비활성화 토글
   const togglePokemon = (name) => {
      setPokemonList(pokemonList.map((pokemon) => (pokemon.name === name ? { ...pokemon, isActive: !pokemon.isActive } : pokemon)))
   }

   return (
      <div className="App">
         <h1>포켓몬 도감</h1>
         <PokemonForm addPokemon={addPokemon} />
         <PokemonList pokemonList={pokemonList} deletePokemon={deletePokemon} togglePokemon={togglePokemon} />
      </div>
   )
}

export default App
