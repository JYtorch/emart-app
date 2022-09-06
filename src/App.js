import { useState } from 'react';
import './App.css';
import Items from './components/Items';
import Menu from './components/Menu';
import useFetchItems from './useFetchItems';

function App() {
  const [query, setQuery] = useState('전체')
  const [pageNumber, setPageNumber] = useState(0)
  const { items, hasMore, loading, error } = useFetchItems(query, pageNumber, setPageNumber)

  return (
    <>
      <Menu setQuery={setQuery} setPageNumber={setPageNumber} />
      <Items items={items} pageNumber={pageNumber} loading={loading} error={error} setPageNumber={setPageNumber} hasMore={hasMore}/>
    </>
  );
}

export default App;
