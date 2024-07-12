import { Cloud, Clouds, Environment , Float, MeshWobbleMaterial, OrbitControls} from '@react-three/drei';
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
          <Environment preset='park' blur={5} />
          <ambientLight />
          <Clouds>
            <Cloud concentrate="outside" seed={1} segments={100} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={1} />
          </Clouds>
          <Float floatIntensity={1} rotationIntensity={10} speed={1}>
            <mesh >
                <boxGeometry />
                
                <MeshWobbleMaterial
                  factor={2}
                  speed={1.5}
                  roughness={0.2}
                  metalness={0.9}
                  envMapIntensity={1}
                  />
            </mesh>
          </Float>
        </Canvas>
    </main>
  )
}
