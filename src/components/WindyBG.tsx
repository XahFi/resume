import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { lightTheme } from '../styles/LightDark';

const Wind = () => {
  const windRef = useRef<THREE.Points>(null!);

  useEffect(() => {
    const particles = new Array(500).fill(0).map(() => ({
      position: new THREE.Vector3(
        -Math.random() * 100,
        THREE.MathUtils.randFloatSpread(50),
        THREE.MathUtils.randFloatSpread(100)
      ),
      velocity: new THREE.Vector3(Math.random() * 0.5, 0, 0)
    }));

    windRef.current.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(particles.map(p => p.position.toArray()).flat(), 3)
    );

    windRef.current.geometry.setAttribute(
      'velocity',
      new THREE.Float32BufferAttribute(particles.map(p => p.velocity.toArray()).flat(), 3)
    );
  }, []);

  useFrame(() => {
    const positions = windRef.current.geometry.attributes.position.array;
    const velocities = windRef.current.geometry.attributes.velocity.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i];
    //   positions[i+2] += velocities[i];
      if (positions[i] > 50) {
        positions[i] = -Math.random() * 100;
      }
    //   if (positions[i+2] > 100) {
    //     positions[i+2] = -Math.random() * 100;
    //   }
    }
    windRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={windRef}>
      <bufferGeometry />
      <pointsMaterial size={0.2} color="#1fc014" />
    </points>
  );
};

const WindyBG = () => {
  return (
    <Canvas 
        camera={{ position: [0, 10, 50], fov: 75 }} 
        style={{
            position: 'fixed', 
            top: 0, 
            left: 0, 
            height: '100%', 
            width: '100%', 
            backgroundColor: lightTheme.body
        }}
    >
      <ambientLight intensity={0.5} />
      <Wind />
    </Canvas>
  );
};

export default WindyBG;
