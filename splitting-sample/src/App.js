import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback : <div>loading...</div>
})

function App() {
  const [visiable, setVisiable] = useState(false);
  const onClick = () => {
    setVisiable(true);
  } 
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
          {visiable && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
