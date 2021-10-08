import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/Apple-Music.png';
import '../../src/App.css';

function Itunes() {
  return (
    <div className="section content-container">
      <img src={logo} alt="Listen on Apple Music" className="itunes-image" />
      <Button href="https://music.apple.com/us/artist/waiting-for-smith/1192026265" variant="outline-secondary">Play</Button>
    </div>
  )
}

export default Itunes
