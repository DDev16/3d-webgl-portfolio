import React, { useMemo } from 'react';
import { TextureLoader, BackSide } from 'three';
import { useLoader } from '@react-three/fiber';

const SkyBox = ({ textureUrl }) => {
  const texture = useLoader(TextureLoader, textureUrl);
  const materialProps = useMemo(
    () => ({
      side: BackSide,
      map: texture,
    }),
    [texture]
  );

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[1000, 10, 10]} />
      <meshBasicMaterial attach="material" {...materialProps} />
    </mesh>
  );
};

export default SkyBox;
