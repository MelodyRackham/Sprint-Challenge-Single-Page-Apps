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

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v1/cards`).then(response => {
      console.log(response);
      setCharacters(response.data.cards);
    });
  }, []);

  return (
    <div>
      <CharactersHead> Characters </CharactersHead>
      {Characters.map(character => {
        return <CharacterCard key={character.id} name={character.name} url={character.imageUrl} />;
      })}
    </div>
  );
};

export default RAndMortyList;
