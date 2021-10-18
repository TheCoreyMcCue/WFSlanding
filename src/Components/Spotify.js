import React from 'react';
import { Button } from 'react-bootstrap';
import logo from './photos/Spotify_logo.svg';
import '../../src/App.css';

function Spotify() {
  return (
    <div className="content-container">
      <img src={logo} alt="Listen on Spotify" className="spotify-image" />
      {/* <i class="fab fa-spotify"></i> */}
      <Button href="https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2?si=rjZkfDosS3WLFU5nPM2rwA&dl_branch=1" variant="secondary">Play</Button>
    </div>
  )
}

export default Spotify
