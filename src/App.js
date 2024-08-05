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
    <section
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url("https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/421995361_931259405284846_7727363143914051329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Co-KFxomSGAQ7kNvgGMH2b_&_nc_ht=scontent-ams4-1.xx&oh=00_AYDhLN_yHOA4OVzYQAIa01vnRT_b782yHy4aOC-UnNzJXw&oe=66B6F4F7")`,
      }}
    >
      <div
        id="container"
        className={`flex flex-col items-center max-w-md w-5/6 bg-white rounded-lg shadow-lg overflow-hidden transition-opacity transition-transform duration-700 ease-in-out ${
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
            link="https://api.ffm.to/sl/e/c/hopelessness-of-love?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxMTIuMC4wLjAiLCJtYWpvciI6IjExMiJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjExMi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoiTWFjIE9TIiwidmVyc2lvbiI6IjEwLjE1LjcifSwiZGV2aWNlIjp7fSwiY3B1Ijp7fX0sImNsaWVudCI6eyJyaWQiOiJkMmFhYTY0ZC04ZWE4LTRhNzQtYmQ4YS01Mjg3Mzg2NWI0MWYiLCJzaWQiOiJiMTg5MTVkMi00N2E4LTQ1ZDUtOGY1MS0yMWQ2MmRiOTZmZjgiLCJpcCI6IjE3OC44NS42Ni4xNTMiLCJyZWYiOiJodHRwczovL2wuZmFjZWJvb2suY29tLyIsImhvc3QiOiJkaXR0by5mbSIsImxhbmciOiJlbi1VUyIsImlwQ291bnRyeSI6Ik5MIn0sImlzV2VicFN1cHBvcnRlZCI6dHJ1ZSwiaXNGcm9tRVUiOnRydWUsImNvdW50cnlDb2QiOiJOWiIsInVzZUFmZiI6Im9yaWdpbiIsImlkIjoiNjA3MGY4ZDE0NTAwMDAxMzAwNTYwZDRmIiwicHJ2IjpmYWxzZSwiSXNSZWFsaSI6ZmFsc2UsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9wYW5kb3JhLmFwcC5saW5rLz8kZGVza3RvcF91cmw9aHR0cHMlM0ElMkYlMkZ3d3cucGFuZG9yYS5jb20lMkZhcnRpc3QlMkZ3YWl0aW5nLWZvci1zbWl0aCUyRmxpbmVzLW9mLWxvdmUtc2luZ2xlJTJGQUw1S2xmaDduNzUyNHBjJiRpb3NfZGVlcGxpbmtfcGF0aD1wYW5kb3JhdjQlM0ElMkYlMkZiYWNrc3RhZ2UlMkZhbGJ1bSUzRnRva2VuJTNEQUwlM0E1NTg5MDA2JiRhbmRyb2lkX2RlZXBsaW5rX3BhdGg9cGFuZG9yYXY0JTNBJTJGJTJGYmFja3N0YWdlJTJGYWxidW0lM0Z0b2tlbiUzREFMJTNBNTU4OTAwNiZ-Y2hhbm5lbD1QYXJ0bmVyJTIwQ2F0YWxvZyUyMFNlYXJjaCUyMEFQSSIsInZpZCI6ImI1YWFkMDJjLTM1NmMtNDMwYi1iZDY4LWJhMTdjODUyZGU3MSIsInNydmMiOiJwYW5kb3JhIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiJob3BlbGVzc25lc3Mtb2YtbG92ZSIsImlzQXV0aG9yaXphdGlvblJlcXVpcmVkIjpmYWxzZSwib3duZXIiOiI1YzUwYjUxZDE0MDAwMDE5MDA2ODY4OTEiLCJ0ZW5hbnQiOiI1ZDJjMjk2M2YwZDUxZWViZDI0ZTc3ODciLCJhciI6IjVjYTNiODcyMGUwMDAwMGJhMzliYzRlMiIsImlzU2hvcnRMaW5rIjpmYWxzZX0"
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
