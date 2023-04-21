import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/deezer-white.jpeg';
import '../../src/App.css';

function Deezer() {
  return (
    <div className="content-container" style={{width: "70vw"}}>
      <img src={logo} alt="Listen on Deezer" className="deezer-image" />
      <Button href="https://www.deezer.com/en/artist/11654939" variant="secondary">Play</Button>
    </div>
  )
}

export default Deezer
