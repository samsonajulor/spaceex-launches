import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Buttons from './components/Buttons';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './queries/query';

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  const [query, setQuery] = useState('rick');
  const [item, setItem] = useState(data?.characters.results);
  useEffect(() => {
    setItem(data?.characters.results)
  }, [data]);


  const menuItems = [...new Set(data?.characters.results.map((val) => val.status))];

  const filterItem = (curcat) => {
    const newItem = data?.characters.results.filter((newVal) => {
      return newVal?.status === curcat;
    });
    setItem(newItem);
  };

  const handleSearch = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value);

    // test if query is empty in that case we just return the original data
    if (typeof query !== 'string' || query.length === 0) {
      return item;
    }

    // make search string lower case
    let searchLower = query.toLowerCase();
    const filtered = item?.filter((data) => {
      if (data.name.toLowerCase().includes(searchLower)) {
        return true;
      }

      if (data.species.toLowerCase().includes(searchLower)) {
        return true;
      }

      if (data.status.toLowerCase().includes(searchLower)) {
        return true;
      }
      return false;
    });

    setItem(filtered);
  }
  console.log(item, 'item');
  return (
    <>
      <div className='container-fluid'>
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
          <p>search</p>
          <input type='text' className='form-input' value={query} onChange={handleSearch} />
        </form>
        <div className='row mt-5'>
          {console.log(query)}
          <Buttons data={data?.characters.results} filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
          <Card item={item} loading={loading} error={error} />
        </div>
      </div>
    </>
  );
};

export default App;
