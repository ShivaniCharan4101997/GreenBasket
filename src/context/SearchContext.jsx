import { createContext, useContext, useEffect, useState } from "react";
import ProductData from "../productList.json";
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // update debounced query after 300ms of inactivity

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      const results = ProductData.filter((item) =>
        item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);

  return (
    <SearchContext.Provider value={{ query, setQuery, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  return useContext(SearchContext);
}

export { SearchContext, SearchProvider, useSearchContext };
