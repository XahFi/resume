import { useRef, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { lightTheme } from '../styles/LightDark';

const RainDrop: FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const speed = Math.random() * 0.02 + 0.15;

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= speed;
      if (ref.current.position.y < -10) {
        ref.current.position.y = 10;
      }
    }
  });

  return (
    <mesh ref={ref} position={[Math.random() * 20 - 10, Math.random() * 20, Math.random() * 20 - 10]}>
      <cylinderGeometry args={[0.025, 0.05, 0.2, 3]} />
      <meshBasicMaterial />
    </mesh>
  );
};

interface RainBG {
  theme: string
}

const RainBackground: FC<RainBG> = ({theme}) => {
  return (
    <Canvas style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: `${theme === 'dark' ? 'black' : lightTheme.body}`
    }}>
      {[...Array(300)].map((_, i) => (
        <RainDrop key={i} />
      ))}
    </Canvas>
  );
};

export default RainBackground;
