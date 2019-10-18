import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const RAndMortyList = () => {
  const [Characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    }, []);
  });

  return (
    <div>
      {Characters.map(character => {
        return <CharacterCard key={character.id} name={character.name} url={character.image} />;
      })}
    </div>
  );
};

export default RAndMortyList;
