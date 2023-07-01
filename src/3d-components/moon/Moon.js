import React from 'react';
import { useGLTF } from '@react-three/drei';

const Moon= (props) => {
  const { scene } = useGLTF('/moon.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/moon.glb'); // Preload adjusted path

export default Moon;
