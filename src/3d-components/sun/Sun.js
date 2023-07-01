import React from 'react';
import { useGLTF } from '@react-three/drei';

const Sun= (props) => {
  const { scene } = useGLTF('/sun.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/sun.glb'); // Preload adjusted path

export default Sun;
