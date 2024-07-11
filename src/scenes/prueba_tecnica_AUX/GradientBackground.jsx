import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Definimos los shaders
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  varying vec2 vUv;
  
  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(st.x, st.y, abs(sin(u_time)), 1.0);
  }
`;

// Creamos el material del shader
const GradientMaterial = shaderMaterial(
  { u_time: 0, u_resolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader
);

// Componente del plano
const GradientPlane = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });
  
  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <GradientMaterial />
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
