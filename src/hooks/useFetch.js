import { useState, useEffect } from 'react';
import paginate from '../utils/paginate';
import { useGlobalContext } from '../context/searchContext';

export const useFetch = () => {
  const { globalItem } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
   const getUsers = async () => {
       setData(paginate(globalItem));
       setLoading(false);
     };
    getUsers();
  }, [globalItem]);
  return { loading, data };
};
