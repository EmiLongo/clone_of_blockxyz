import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { CanvasContainer } from '../scenes/CanvasContainer';

function App() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isGrayscale, setIsGrayscale] = useState(false)


  const [embedHtml, setEmbedHtml] = useState('')
  console.log(embedHtml)

  useEffect(() => {
    const oembedUrl = `https://embed.tidal.com/playlists/f8e89248-59b2-4f83-81ef-168d2bf2bf61`

    fetch(oembedUrl)
      .then(response => response.json())
      .then(data => {
        const embedHtml = data.html;
        setEmbedHtml(embedHtml);
        console.log(embedHtml)
      })
      .catch(error => console.error('Error fetching oEmbed:', error));
  }, []);

  return (
    <>
      <Layout isAnimating={isAnimating} 
              setIsAnimating={setIsAnimating} 
              isGrayscale={isGrayscale}
              setIsGrayscale={setIsGrayscale}
      />
      <CanvasContainer isAnimating={isAnimating} isGrayscale={isGrayscale} />
    </>
  );
}

export default App;
