import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharactersHead = styled.h1`
  color: red;
  font-size: 4rem;
  font-family: 'Long Cang', cursive;
`;

const RAndMortyList = () => {
  const [Characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://api.pokemontcg.io/v1/cards`).then(response => {
  //     console.log(response);
  //     setCharacters(response.data.cards);
  //   });
  // }, []);

  useEffect(() => {
    setFilteredCharacter(
      Characters.filter(character => character.name.toLowerCase().includes(query.toLocaleLowerCase())),
    );
  }, [query, Characters]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1> Search Below for your Favorite Character</h1>
      <form className='search'>
        <input
          type='text'
          onChange={handleInputChange}
          value={query}
          name='name'
          placeholder='search by name'
          autoComplete='off'
        />
      </form>
      <CharactersHead> Characters </CharactersHead>
      {filteredCharacter.map(character => {
        return <CharacterCard key={character.id} name={character.name} url={character.imageUrl} />;
      })}
    </div>
  );
};

export default RAndMortyList;
