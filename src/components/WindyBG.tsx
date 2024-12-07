import { useRef, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Leaves: FC = () => {
  // setting the object and speed
  const ref = useRef<THREE.Mesh>(null!);
  const speed = Math.random() * 0.02 + 0.015;

  // use frame for the animation
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += speed;
      if (ref.current.position.x > 15) {
        ref.current.position.x = -15;
      }
    }
  });

  return (
    <mesh ref={ref} position={[Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]}>
      <cylinderGeometry args={[Math.random() * 0.25, Math.random() * 0.2, Math.random() * 0.2, 2]} />
      <meshBasicMaterial color='green'/>
    </mesh>
  );
};

// The canvas to put the 3d objects on
const WindBackground: FC = () => {
  return (
    <Canvas style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundColor:lightTheme.body
      background: 'linear-gradient(to bottom, #FFBB33, #FFCC66, #FFDD99)',
    }}>
      {[...Array(50)].map((_, i) => (
        <Leaves key={i} />
      ))}
    </Canvas>
  );
};

export default WindBackground;
