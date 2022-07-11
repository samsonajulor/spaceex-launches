import React, { useState } from 'react';
import Data from './db/Data';
import Card from './components/Card';

const App = () => {
  const [item, setItem] = useState(Data);
  return (
    <>
      <div className='container-fluid'>
        <div className='col'>
          <h1 className='col-12 text-center my-3 fw-bold'>User Data</h1>
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default App;
