import React from 'react';
import { useGLTF } from '@react-three/drei';

const Flag= (props) => {
  const { scene } = useGLTF('/flag.glb', true); // Adjusted path
  return <primitive object={scene} {...props} />;
};

useGLTF.preload('/flag.glb'); // Preload adjusted path

export default Flag;