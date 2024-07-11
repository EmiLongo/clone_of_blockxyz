// BackgroundCanvas.js
import { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { GradientTexture } from '@react-three/drei';
import { PlaneGeometry } from 'three';

extend({ PlaneGeometry });

const Background = () => {
  const meshRef = useRef();

  // Animar el gradiente (ejemplo básico)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[7,7]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={['#FF3C00', '#6ec3f4', '#38DCCB']}
        />
      </meshBasicMaterial>
    </mesh>
  );
};

const BackgroundCanvas = ({children}) => {
  return (
    <div className="background--custom">
      <Canvas
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'rotate(0deg) scale(2) translateY(0%)',
          zIndex: -1,
        }}
        className='canva'
        shadows
        camera={{ position: [0, 0, 3], fov : 45 }}
      >
        <Background />
        {children}
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
