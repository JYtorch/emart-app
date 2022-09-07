import { useCallback, useState } from 'react';
import './App.css';
import Items from './components/Items';
import Menu from './components/Menu';
import useFetchItems from './useFetchItems';

function App() {
  const [query, setQuery] = useState('전체')
  const [pageNumber, setPageNumber] = useState(0)

  const getNextPage = useCallback((value) => {
        setPageNumber(value)
  }, [setPageNumber])
  
  const changeQuery = useCallback((value) => {
        setQuery(value)
  }, [setQuery])

  const { items, hasMore, loading, error } = useFetchItems(query, pageNumber, getNextPage)

  return (
    <>
      <Menu changeQuery={changeQuery} getNextPage={getNextPage} />
      <Items items={items} pageNumber={pageNumber} loading={loading} error={error} getNextPage={getNextPage} hasMore={hasMore}/>
    </>
  );
}

export default App;
