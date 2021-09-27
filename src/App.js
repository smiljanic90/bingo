import React from 'react';
import './App.css';
import Button from './components/Button/button.component'
import Loto from './containers/loto.container'

function App() {
  return (
    <div className="App">
      <div className="bingo-holder">
        <Loto />
        {/* <div className="drum-and-numbers">
        <Drum />
        <Numbers/>
        </div>
        <div className="generated-tickets">
          <GeneratedTickets />
        </div> */}
      </div>
    </div>
  );
}

export default App;
