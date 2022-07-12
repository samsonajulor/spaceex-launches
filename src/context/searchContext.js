import { createContext, useContext, useEffect, useState } from 'react';
import data from '../db/Data'


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('food')
  const [globalItem, setGlobalItem] = useState(data)

 function search(query) {
    //we test if query is empty in that case we just return the original data
    if (typeof query !== 'string' || query.length === 0) {
      return data;
    }

    //we make search string lower case
    let searchLower = query.toLowerCase();
    let filtered = data.filter((data) => {
      if (data.title.toLowerCase().includes(searchLower)) {
        return true;
      }

      if (data.desc.toLowerCase().includes(searchLower)) {
        return true;
      }
      
      if (data.category.toLowerCase().includes(searchLower)) {
        return true;
      }
      return false;
     });
    
    return filtered;
  }

  useEffect(() => {
   setGlobalItem(search(query));
  }, [query])


  return (
    <AppContext.Provider value={{ query, setQuery, globalItem }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
