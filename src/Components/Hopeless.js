import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/itunes.png';

function Hopeless() {
  return (
    <div className="content-container">
      <img src={logo} alt="Purchase WFS Music" className="hopeless-image" />
      <Button className="hopeless-button" href="https://music.apple.com/gb/album/hopelessness-of-love-ep/1569151487" variant="outline-secondary">Buy</Button>
    </div>
  )
}

export default Hopeless
