import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Earth = forwardRef((props, ref) => {
  const { scene } = useGLTF('/earth.glb', true); // Adjusted path
  return <primitive ref={ref} object={scene} {...props} />;
});

useGLTF.preload('/earth.glb'); // Preload adjusted path

export default Earth;
