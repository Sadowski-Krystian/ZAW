import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
function App() {
  const [leftpts, setLeftPoints] = useState(7)
  const [health, setHealth] = useState(5)
  const [cash, setCash] = useState(5)
  const [speed, setSpeed] = useState(5)
  const adjustHealth = (e)=>{
    const value = e.target.value
    if(health>value && leftpts>0){
      setHealth(health+1)
      setLeftPoints(leftpts+1)
    }else
    if(health<value && leftpts<7){
      setHealth(health-1)
      setLeftPoints(leftpts-1)
    }
    
  }
  const adjustCash = (e)=>{
    const value = e.target.value
    if(cash>value && leftpts>0){
      setCash(cash+1)
      setLeftPoints(leftpts+1)
    }else
    if(cash<value && leftpts<7){
      setCash(cash-1)
      setLeftPoints(leftpts-1)
    }
  }
  const adjustSpeed = (e)=>{
    const value = e.target.value
    if(speed>value && leftpts>0){
      setSpeed(speed+1)
      setLeftPoints(leftpts+1)
    }else
    if(speed<value && leftpts<7){
      setSpeed(speed-1)
      setLeftPoints(leftpts-1)
    }
  }
  return (
    <div className="App">
      <h2>Player</h2>
      <label htmlFor="nickname">Nickname</label>
      <input type="text" id="nickname"/>
      <p>Points used <output>{leftpts}</output> of 7</p>
      <label>Health</label>
      <input type="range" min="0" max="9" value={health} onChange={ (e)=> adjustHealth(e)}/>
      <label>cash</label>
      <input type="range" min="0" max="9" value={cash} onChange={ (e)=> adjustCash(e)}/>
      <label>Speed</label>
      <input type="range" min="0" max="9" value={speed} onChange={ (e)=> adjustSpeed(e)}/>
    </div>
  );
}

export default App;
