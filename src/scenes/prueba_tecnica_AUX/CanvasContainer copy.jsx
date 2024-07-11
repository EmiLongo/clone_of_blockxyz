import { Environment , GizmoHelper, GizmoViewport, MeshWobbleMaterial, OrbitControls, Sky, Sphere, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
// import GradientBackground from './GradientBackground';

export const CanvasContainer = () => {
  return (
    <main id="canvas-container">
        <Canvas 
        className='canvas'
        shadows
        camera={{ position: [0, 0, 3], fov : 45 }}
        >
          {/* <color attach="background" args={['#0b1215']} /> */}
          <OrbitControls autoRotate autoRotateSpeed={4}/>
          {/* {[...Array(10)].map((_, i) => (
        <Sphere key={i} position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2]}>
          <MeshWobbleMaterial color={`hsl(${Math.random() * 360}, 100%, 50%)`} speed={1} factor={0.6} />
        </Sphere>
      ))} */}
          {/* <Sky
          distance={450000} // Distance of the sky from the camera
          sunPosition={[100, 10, 100]} // Position of the sun
          inclination={0} // Sun elevation angle from 0 to 1 (0 at the horizon, 1 at the zenith)
          azimuth={0.25} // Azimuth angle from 0 to 1 (0 is north, 0.5 is south)
          turbidity={8} // Atmospheric turbidity (amount of haze or dust in the air)
          rayleigh={2} // Rayleigh scattering coefficient (affects the blue sky color)
          mieCoefficient={0.005} // Mie scattering coefficient (affects the orange sky color)
          mieDirectionalG={0.8} // Mie scattering directional asymmetry (affects the sun's glow)
        /> */}
          {/* <GradientBackground /> */}
          {/* <MorphAnimMesh morphTargetNames={["mouth"]} morphTargetInfluences={[0.5]} /> */}
          {/* <Environment background preset='park' /> */}
          <Environment preset='sunset' />
          <ambientLight />
          <mesh>
              <boxGeometry />
              <meshStandardMaterial envMapIntensity={1} roughness={0.1} metalness={.9} morphTargets={} />
              {/* <MorphMesh /> */}
          </mesh>
          {/* <GizmoHelper alignment="bottom-right" margin={[100, 100, 0]}>
            <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
          </GizmoHelper>   */}
          {/* <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade={0} speed={1}/>   */}
        </Canvas>
    </main>
  )
}
