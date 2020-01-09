import React from 'react';
import './App.css';
import ButtonsAndVideoFrameThatChanges from "./ButtonsAndVideoFrameThatChanges"
import { isMobile } from 'react-device-detect';

function App() {
  return (
      <div className={isMobile ? "App-mobile" : "App"}>
          <ButtonsAndVideoFrameThatChanges className="App-overflow"/>
      </div>
  );
}

export default App;
