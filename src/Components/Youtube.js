import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/YouTube.svg.png';
import '../../src/App.css';

function Youtube() {
  return (
    <div className="content-container">
      <img src={logo} alt="" className="spotify-image" />
      <Button href="https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w" variant="outline-secondary">Play</Button>
      {/* <a href="https://www.youtube.com/channel/UCsoTZ8qLcMzfohGDcvpuT3w">Youtube</a> */}
    </div>
  )
}

export default Youtube
