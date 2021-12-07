import React , {useState} from 'react';
function App() {
  const [count, setCount] = useState(0)

  function addCount(){
    setCount(prevCount => prevCount+1)
  }
  function decCount(){
    setCount(prevCount => prevCount-1)
  }
  function resetCount(){
    setCount(prevCount => 0)
  }
    return (
      <>
      <button onClick ={decCount}>-</button>
      <span>{count}</span>
      <button onClick ={addCount}>+</button>
      <button onClick ={resetCount}>Reset</button>
      </>
    )
}

export default App;
