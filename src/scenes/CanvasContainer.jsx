import { Cloud, Clouds, Environment , Float, MeshWobbleMaterial, OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import useIsMobile from '@hooks/useIsMobile';
export const CanvasContainer = ({isAnimating, isGrayscale}) => {
  const isMobile = useIsMobile()

  return (
    <main id="canvas-container"
          style={{
            WebkitFilter: isGrayscale ? 'grayscale(100%)' : 'none',
            filter: isGrayscale ? 'grayscale(100%)' : 'none'
          }}
    >
        <Canvas 
        className='canvas'
        shadows
        camera={{ position: [0, 0, 3], fov : 45 }}
        >
          <OrbitControls autoRotate={isAnimating} autoRotateSpeed={4}/>
          <Environment preset='lobby' blur={1} />
          <ambientLight />
          <Clouds>
            <Cloud concentrate="outside" seed={1} segments={100} bounds={20} volume={20} growth={1} opacity={0.15} position={[0, 0, -10]} speed={isAnimating ? 1 : 0} />
          </Clouds>
          <Float floatIntensity={1} rotationIntensity={10} speed={isAnimating ? 1 : 0}>
            <mesh scale={isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]}>
                <boxGeometry />
                <MeshWobbleMaterial
                  factor={isAnimating ? 2 : 1}
                  speed={isAnimating ? 1.5 : 0}
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
