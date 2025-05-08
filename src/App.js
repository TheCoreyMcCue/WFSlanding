import { useEffect, useState } from "react";
import Social from "./components/Social";

import bgImage from "./assets/Raised-Up.jpg";
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
    <>
      <div className="w-full bg-red-600 text-white text-center py-3 font-bold shadow-md z-50 px-2">
        <a
          href="https://www.waitingforsmith.co.uk/#comp-m8ni8n6s"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🎟️ Buy Tickets to the Joy of Living Tour –
          <br className="block sm:hidden" />
          <span className="sm:inline"> On Sale Now! 🎟️</span>
        </a>
      </div>

      <section
        className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
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
              link="https://api.ffm.to/sl/e/c/hopelessness-of-love"
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
    </>
  );
}

export default App;
