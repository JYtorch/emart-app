import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import Menu from './components/Menu';

function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const res = await axios.get('/data.json')
      setItems(res.data)
    }
    getItems()
  }, [])

  return (
    <div className="App">
      <Menu />
      <Items items={items} />
    </div>
  );
}

export default App;
