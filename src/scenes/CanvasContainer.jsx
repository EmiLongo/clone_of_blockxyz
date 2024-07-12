import { Cloud, Clouds, Environment , Float, MeshWobbleMaterial, OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import useIsMobile from '@hooks/useIsMobile';
export const CanvasContainer = ({isAnimating, isGrayscale}) => {
  const isMobile = useIsMobile()
  const a = <Environment>...</Environment>
  console.log(a)
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
          <OrbitControls 
            autoRotate={isAnimating}
            autoRotateSpeed={4}
          />
          <Environment 
            preset='park'
          />
          <ambientLight />
          <Clouds>
            <Cloud concentrate="outside" seed={1} segments={100} bounds={20} volume={20} growth={1} opacity={0.10} position={[0, 0, -10]} speed={isAnimating ? 1 : 0} />
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
          {/* <mesh position={[-10 , 1, 1]}>
            <planeGeometry args={[100, 100, 1, 1]} />
            <meshBasicMaterial
              noise={true}
              noiseMap={'https://images.unsplash.com/photo-1579546929662-711aa81148cf'}
              // map-flipY={false}
              // roughness={1}
              // roughnessMap-flipY={false}
              // map-anisotropy={16}

            />
          </mesh> */}
        </Canvas>
    </main>
  )
}
