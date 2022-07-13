import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Buttons from './components/Buttons';
import { useQuery } from '@apollo/client';
import { LAUNCHES_PAST } from './queries/query';
import Pagination from './components/Pagination';

const App = () => {
  const { loading, error, data, refetch } = useQuery(LAUNCHES_PAST, {
    variables: { sort: 'launch_year' },
  });
  const [query, setQuery] = useState('');
  const [item, setItem] = useState(data?.launchesPast);
  const [filtered, setFiltered] = useState([])
  
  useEffect(() => {
    refetch()
    setItem(data?.launchesPast);
  }, [data, refetch])

    useEffect(() => {
      setItem(filtered);
    }, [filtered]);
  const menuItems = ['2008-2012', '2013-2016', '2017-2020'];
  // const menuItems = [...new Set(data?.launchesPast.map((val) => val.launch_year))];

  const filterItem = (e) => {
    let years = []
    if (e.target.innerText === '2008-2012') {
      years = ['2008', '2009', '2010', '2011', '2012']
    }
    if (e.target.innerText === '2013-2016') {
      years = ['2013', '2014', '2015', '2016'];
    }
    if (e.target.innerText === '2017-2020') {
      years = ['2017', '2018', '2019', '2020'];
    }
    const newItem = data?.launchesPast.filter((newVal) => {
      return years.includes(newVal?.launch_year);
    });
    setItem(newItem);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);

    // test if query is empty in that case we just return the original data
    if (typeof query !== 'string' || query.length === 1) {
      setFiltered(data?.launchesPast);
      return null
    }
    
    // make search string lower case
    let searchLower = query.toLowerCase();
    const filter = item?.filter((data) => {
      if (data.mission_name.toLowerCase().indexOf(searchLower) > -1) {
        return true;
      }
      
      if (data.launch_year.toLowerCase().indexOf(searchLower) > -1) {
        return true;
      }
      return false;
    });
    console.log(filter, 'filter')
    setFiltered(filter);
  };
  console.log(query, 'query');
  return (
    <>
      <div className='container-fluid'>
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
          <p>search</p>
          <input type='search' className='form-input' value={query} onChange={handleSearch} />
        </form>
        <div className='row mt-5'>
          <Buttons data={data?.launchesPast} filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
          <Card item={item} loading={loading} error={error} />
        </div>
        {/* <Pagination prevPage={prevPage} item={item} loading={loading} nextPage={nextPage} page={page} handlePage={handlePage}  /> */}
      </div>
    </>
  );
};

export default App;
