// GradientCanvas.js
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GradientMaterial from './GradientMaterial';
import '@styles/index.css'

const GradientPlane = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.material.uniforms.u_time.value = clock.getElapsedTime();
    ref.current.material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <GradientMaterial attach="material" />
    </mesh>
  );
};

const GradientCanvas = () => {
  return (
    <Canvas>
      <GradientPlane />
    </Canvas>
  );
};

export default GradientCanvas;
