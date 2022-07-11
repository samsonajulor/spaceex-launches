import { useState, useEffect } from 'react';
import paginate from '../utils/paginate';
import Data from '../db/Data';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    setData(paginate(Data));
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { loading, data };
};
