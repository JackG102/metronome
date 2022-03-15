import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Metronome = () => {
  const metronomeSound = new Audio('../assets/metronome.wav');

  const [bpm, setBPM] = useState('60');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let metronomeSession = '';
    if (running) {
      metronomeSession = setInterval(() => {
        metronomeSound.play();
      }, 60000/bpm);
    }

    return () => clearInterval(metronomeSession);
  }, [running]);

  const toggleMetronome = (event) => {
    event.preventDefault();
    running !== true ? setRunning(true) : setRunning(false);
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
          onClick={toggleMetronome}
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