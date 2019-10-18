import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchForm = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapai.co/aip/v2/pokemon`).then(response => {
      console.log(response.data.results);
      setData(response.data.results);
      setFilteredCharacter(response.data.results);
    });
  }, []);

  useEffect(() => {
    setFilteredCharacter(data.filter(character => character.name.toLowerCase().includes(query.toLocaleLowerCase())));
  }, [query, data]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className='search-form'>
      <h1> Search Below for your Favorite Character </h1>
      <Link to='/CharacterList'></Link>
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
      <div>
        {filteredCharacter.map(data => {
          return (
            <div className='character-list' key={data.id}>
              {console.log(data.url)}
              <h2>{data.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchForm;
