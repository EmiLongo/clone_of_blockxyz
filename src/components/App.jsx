// import { Environment , OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { CanvasContainer } from '../scenes/CanvasContainer';

// import { MorphAnimMesh } from 'three/examples/jsm/Addons.js';

function App() {
  const [embedHtml, setEmbedHtml] = useState('');
  console.log(embedHtml)

  useEffect(() => {
    const oembedUrl = `https://embed.tidal.com/playlists/f8e89248-59b2-4f83-81ef-168d2bf2bf61`;

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
      <Layout />
      <CanvasContainer />
      {/* <main id="canvas-container">
        <Canvas 
          className='canvas'
          shadows
          camera={{ position: [0, 0, 3], fov : 45 }}
        >
          <OrbitControls autoRotate autoRotateSpeed={4}/>

          <Environment preset="sunset" />
          <ambientLight />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />

          </mesh>
        </Canvas>
      </main> */}
    </>
  );
}

export default App;
