import play from "@imgs/play.svg";
import tidalIcon from "@imgs/tidalIcon.svg";
import headphones from "@imgs/headphones.svg";
import headphonesoff from "@imgs/headphonesoff.svg";
import { useEffect, useState } from "react";
import axios from 'axios';
import '@styles/header.css';

export const Player = () => {

    const [imageSrc, setImageSrc] = useState(play);

    const togglePlay = () => {
        if (imageSrc === headphones) {
          setImageSrc(headphonesoff)
        } else {
          setImageSrc(headphones)
        }
      };

  return (
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
  )
}





// export const TidalTrack = ({ trackId }) => {
//   const [track, setTrack] = useState(null)
//   const URL_BASE = 'https://apiref.developer.tidal.com/apiref?spec='
//   const ENDPOINT_TRACKS = 'v1/tracks'
//   const trackId = "catalogue&ref=get-albums-by-barcode-id"
//   useEffect(() => {
//     const fetchTrack = async () => {
//       const response = await axios.get(
//         `${URL_BASE}${ENDPOINT_TRACKS}/${trackId}`,
//         {
//           headers: {
//             Authorization: `Bearer YOUR_ACCESS_TOKEN`,
//           },
//         }
//       );
//       setTrack(response.data)
//     };

//     fetchTrack()
//   }, [trackId])
//   return (
//     <div>
//       <h1>{track.title}</h1>
//       <p>{track.artist.name}</p>
//     </div>
//   )
// }
