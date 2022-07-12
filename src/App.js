import React, { useState, useEffect } from 'react';
import Data from './db/Data';
import Card from './components/Card';
import Buttons from './components/Buttons';
// import Pagination from './components/Pagination';
import { useFetch } from './hooks/useFetch';
import SearchForm from './components/SearchForm';

const App = () => {
  const { loading, data } = useFetch();
  const [page] = useState(0);
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (loading) return;
    setItem(data[page]);
  }, [loading, page, data]);

  // const nextPage = () => {
  //   setPage((oldPage) => {
  //     let nextPage = oldPage + 1;
  //     if (nextPage > data.length - 1) {
  //       nextPage = 0;
  //     }
  //     return nextPage;
  //   });
  // };
  // const prevPage = () => {
  //   setPage((oldPage) => {
  //     let prevPage = oldPage - 1;
  //     if (prevPage < 0) {
  //       prevPage = data.length - 1;
  //     }
  //     return prevPage;
  //   });
  // };

  // const handlePage = (index) => {
  //   setPage(index);
  // };

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className='container-fluid'>
        <SearchForm />
        <div className='row mt-5'>
          <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
          <Card item={item} />
        </div>
        {/* <Pagination prevPage={prevPage} item={data} handlePage={handlePage} nextPage={nextPage} page={page} loading={loading} /> */}
      </div>
    </>
  );
};

export default App;
