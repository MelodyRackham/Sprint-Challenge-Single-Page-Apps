import React from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';

export default function Header() {
  return (
    <header className='ui centered'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
      </div>
      <div>
        <Link to='/CharacterList'>Characters</Link>
      </div>
      <h1 className='ui center'>Pokemon</h1>
    </header>
  );
}
