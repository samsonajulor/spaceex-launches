import React from 'react';
import { useGlobalContext } from '../context/searchContext';

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <p>search</p>
      <input type='text' className='form-input' value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
};

export default SearchForm;
