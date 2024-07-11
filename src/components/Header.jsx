import person from "@imgs/person.svg";
import play from "@imgs/play.svg";
import tidalIcon from "@imgs/tidalIcon.svg";
import headphones from "@imgs/headphones.svg";
import headphonesoff from "@imgs/headphonesoff.svg";
import '@styles/header.css';
import { useState } from "react";

export const Header = ({setOpenModal}) => {
  const [imageSrc, setImageSrc] = useState(play);

  // Función para alternar entre las imágenes
  const togglePlay = () => {
    if (imageSrc === headphones) {
      setImageSrc(headphonesoff);
    } else {
      setImageSrc(headphones);
    }
    
  };

  return (
    <header>
      <h1>Clone of the website https://block.xyz for technical proof.</h1>
      <div className="player">
        <div >
          <div id="player-play" >
            <img src={imageSrc} alt="Play" width="24"
              onClick={togglePlay}
            />
            <iframe
              src="https://embed.tidal.com/playlists/f8e89248-59b2-4f83-81ef-168d2bf2bf61"
              width="500"
              height="500"
              allow="encrypted-media"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              title="TIDAL Embed Player"
            />
          </div>
          <div>
            <h3>Block Vibes</h3>
            <h4>Curated by JAY-Z</h4>
          </div>
        </div>
        <div onClick={() => window.open('https://tidal.com/browse/playlist/3d95c4f6-dad5-4d7f-a469-8bde01b7771d', '_blank')}>
          <img src={tidalIcon} alt="Tidal Icon" width="24" />

        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://block.xyz/news">NEWS</a>
          </li>
          <li>
            <a href="https://block.xyz/careers">CAREERS</a>
          </li>
          <li>
            <a href="https://investors.block.xyz/overview/default.aspx">
              INVESTORS
            </a>
          </li>
          <li onClick={() => setOpenModal(true)}>
              <img src={person} alt="Person" height="24" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
