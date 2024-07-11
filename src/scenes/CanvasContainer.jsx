import { Environment , OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'


export const CanvasContainer = () => {
  return (
    <main id="canvas-container">
        <Canvas 
        className='canvas'
        shadows
        camera={{ position: [0, 0, 3], fov : 45 }}
        >

          <OrbitControls autoRotate autoRotateSpeed={4}/>
          <Environment preset='park' />

          <ambientLight />
          <mesh>
              <boxGeometry />
              <meshStandardMaterial envMapIntensity={1} roughness={0.1} metalness={.9} />

          </mesh>
        </Canvas>
    </main>
  )
}
