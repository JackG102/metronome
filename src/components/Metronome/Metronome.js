import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Metronome = () => {
  const [bpm, setBPM] = useState('60');
  const [running, setRunning] = useState(false);

  const toggleRunning = (event) => {
    event.preventDefault();
    running ? setRunning(false) : setRunning(true);
  };

  return (
    <div>
      <h2>Metronome Component</h2>
      <form>
        <input 
          className="ui field" 
          id="myRange"
          type="range" 
          min="1" 
          max="240"
          onChange={e => setBPM(e.target.value)}
          >
        </input>
      <div>
        <button 
          className="ui button green" 
          type="submit"
          onClick={toggleRunning}
        >
          {running ? 'Stop' : 'Start'}
        </button>
      </div>
      </form>
      <h3>Beats per Minute: {bpm}</h3>
    </div>
  );
}

export default Metronome;