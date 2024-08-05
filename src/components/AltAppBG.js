import { useEffect, useState } from "react";
import Social from "./components/Social";

import insta from "./assets/instagram.jpeg";
import web from "./assets/web.jpeg";
import harry from "./assets/harry.png";

function App() {
  // State to control the transition effect
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger transition effect on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-red-200 backdrop-blur-md p-4">
      <div
        id="container"
        className={`flex flex-col items-center max-w-md w-5/6 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-700 ease-in-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          id="top-image"
          className="w-full h-60 object-cover"
          src={harry}
          alt="Artist"
        />

        <div className="w-full">
          <Social
            icon="https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png"
            link="https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2"
          />

          <Social
            icon="https://cloudinary-cdn.ffm.to/s--LpZFcfe0--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png"
            link="https://music.apple.com/nl/artist/waiting-for-smith/1192026265"
          />

          <Social
            icon="https://cloudinary-cdn.ffm.to/s--BuOsZiLg--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png"
            link="https://www.deezer.com/us/artist/11654939"
          />

          <Social
            icon="https://cloudinary-cdn.ffm.to/s--uf3wpRWG--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_amazon.png"
            link="https://music.amazon.com/artists/B01MS44PHF/waiting-for-smith"
          />

          <Social
            icon="https://cloudinary-cdn.ffm.to/s--wJHSivtl--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_tidal.png"
            link="https://tidal.com/browse/artist/8406140"
          />

          <Social
            icon="https://cloudinary-cdn.ffm.to/s--abCrNs3k--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_pandora.png"
            link="https://www.pandora.com/artist/waiting-for-smith/ARa3ggX5KJJkhw9"
          />

          <Social
            icon={insta}
            link="https://www.instagram.com/waitingforsmith/?hl=en"
            buttonText="Follow"
            height="h-10"
            width="w-12"
          />

          <Social
            icon={web}
            link="https://www.waitingforsmith.co.uk/"
            buttonText="Explore"
            height="h-10"
            width="w-12"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
