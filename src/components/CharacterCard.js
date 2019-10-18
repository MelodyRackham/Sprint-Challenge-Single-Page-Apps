import React from 'react';
import styled from 'styled-components';

const Name = styled.h3`
  color: blue;
  font-size: 2rem;
  font-family: 'Long Cang', cursive;
`;

const CharacterCard = props => {
  return (
    <div>
      <Name> My Name is: {props.name}</Name>
      <img src={props.url} />
    </div>
  );
};
export default CharacterCard;
