import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/Deezer.svg.png';
import '../../src/App.css';

function Deezer() {
  return (
    <div className="content-container">
      <img src={logo} alt="" className="spotify-image" />
      <Button href="https://www.deezer.com/en/artist/11654939" variant="outline-secondary">Play</Button>
      {/* <a href="https://www.deezer.com/en/artist/11654939">Deezer</a> */}
    </div>
  )
}

export default Deezer
