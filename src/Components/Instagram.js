import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/instagram.svg';
import '../../src/App.css';

function Instagram() {
  return (
    <div className="content-container">
      <img src={logo} alt="" className="insta-image" />
      <Button href="https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2?si=rjZkfDosS3WLFU5nPM2rwA&dl_branch=1" variant="outline-secondary">Follow</Button>
      {/* <a href="https://www.instagram.com/waitingforsmith/">Instagram</a> */}
    </div>
  )
}

export default Instagram
