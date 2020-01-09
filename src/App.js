import React from 'react';
import './App.css';
import ButtonsAndVideoFrameThatChanges from "./ButtonsAndVideoFrameThatChanges"
import { isMobile } from 'react-device-detect';

function App() {
  return (
      <div background-color="#dff2f7" height="100%">
      <div className={isMobile ? "App-mobile" : "App"}>
          <ButtonsAndVideoFrameThatChanges className="App-overflow"/>
      </div>
      </div>
  );
}

export default App;
