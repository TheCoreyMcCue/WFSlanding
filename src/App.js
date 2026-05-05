import { useEffect, useState } from "react";
import Social from "./components/Social";

import bgImage from "./assets/Raised-Up.jpg";
import insta from "./assets/instagram.jpeg";
import web from "./assets/web.jpeg";
import harry from "./assets/harry.png";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div
        id="container"
        className={`relative flex flex-col items-center max-w-sm w-full bg-stone-900/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-y-auto max-h-[calc(100vh-2rem)] transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="relative w-full h-44 sm:h-60 shrink-0">
          <img
            id="top-image"
            className="w-full h-full object-cover"
            src={harry}
            alt="Artist"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-stone-900/95" />
          <div className="absolute bottom-4 inset-x-0 text-center px-4">
            <p className="text-white/90 text-xs uppercase tracking-[0.35em] font-semibold">
              Waiting for Smith
            </p>
          </div>
        </div>

        <div className="w-full">
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png"
            link="https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2"
            label="Spotify"
          />
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--LpZFcfe0--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png"
            link="https://music.apple.com/nl/artist/waiting-for-smith/1192026265"
            label="Apple Music"
          />
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--BuOsZiLg--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png"
            link="https://www.deezer.com/us/artist/11654939"
            label="Deezer"
          />
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--uf3wpRWG--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon.png"
            link="https://music.amazon.com/artists/B01MS44PHF/waiting-for-smith"
            label="Amazon Music"
          />
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--wJHSivtl--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal.png"
            link="https://tidal.com/browse/artist/8406140"
            label="Tidal"
          />
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--abCrNs3k--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_pandora.png"
            link="https://api.ffm.to/sl/e/c/hopelessness-of-love"
            label="Pandora"
          />
          <Social
            icon={insta}
            link="https://www.instagram.com/waitingforsmith/?hl=en"
            label="Instagram"
            buttonText="Follow"
          />
          <Social
            icon={web}
            link="https://www.waitingforsmith.co.uk/"
            label="Website"
            buttonText="Explore"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
