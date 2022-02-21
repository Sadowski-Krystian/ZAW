import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
function App() {
  const [resType, setRespType] = useState('post')
  const [items, setItems] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/')
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resType])
  return (
    <div className="App">
      <button onClick={ ()=>setRespType('post')}>Posty</button>
      <button onClick={ ()=>setRespType('users')}>Urzytkownicy</button>
      <button onClick={ ()=>setRespType('comments')}>Komentarze</button>
      <h1>Pokaż {resType}</h1>
      {
        items.map((item)=>{
          return <pre>{JSON.stringify(item)}</pre>
        })
      }
    </div>
  );
}

export default App;
