import React from 'react';
import { useGLTF } from '@react-three/drei';

const Rocket = (props) => {
  const { scene } = useGLTF('/rocket.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/rocket.glb'); // Preload adjusted path

export default Rocket;
