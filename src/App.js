import React from 'react';
import './App.css';
import Button from './components/Button/button.component'
import Drum from './components/Drum/index'
import Numbers from './components/Numbers/index'
import GeneratedTickets from './components/GeneratedTickets/index'

function App() {
  return (
    <div className="App">
      <div className="bingo-holder">
        <div className="drum-and-numbers">
        <Drum />
        <Numbers/>
        </div>
        <div className="generated-tickets">
          <GeneratedTickets />
        </div>
      </div>
    </div>
  );
}

export default App;
