import React from 'react';
import { useGLTF } from '@react-three/drei';

const UfoGuy = (props) => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/UfoGuy.glb', true);
  return <primitive object={scene} {...props} />;
};

useGLTF.preload(process.env.PUBLIC_URL + '/UfoGuy.glb');


export default UfoGuy;
