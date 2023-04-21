import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/apple-music-white.png';
import '../../src/App.css';

function Itunes() {
  return (
    <div className="section content-container">
      <div className="apple-container"><i class="fab fa-apple"></i><div className="apple-text"> Apple Music </div></div>
      <Button href="https://music.apple.com/us/artist/waiting-for-smith/1192026265" variant="secondary">Play</Button>
    </div>
  )
}

export default Itunes
