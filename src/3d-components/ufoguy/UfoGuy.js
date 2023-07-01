import React from 'react';
import { useGLTF } from '@react-three/drei';

const UfoGuy = (props) => {
  const { scene } = useGLTF('/UfoGuy.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};


useGLTF.preload('/UfoGuy.glb'); // Preload adjusted path

export default UfoGuy;
