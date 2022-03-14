import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Metronome = () => {
  const [bpm, setBPM] = useState('60');

  return (
    <div>
      <h2>Metronome Component</h2>
      <input 
        className="slider" 
        id="myRange"
        type="range" 
        min="1" 
        max="240"
        onChange={e => setBPM(e.target.value)}
        >
      </input>
    <h3>Beats per Minute: {bpm}</h3>
    </div>
  );
}

export default Metronome;