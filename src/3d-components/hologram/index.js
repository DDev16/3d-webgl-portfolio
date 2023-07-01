import React, { useEffect, useRef } from 'react';
import {
  Billboard,
  Cylinder,
  Plane,
  Box,
  useScroll,
  useTexture,
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import alphaMap from './textures/alpha-map.png';
import theme from '~/src/theme';

function Hologram() {
  const scroll = useScroll();
  const coneRef = useRef();
  const hologramRef = useRef();

  const materials = useTexture({
    alphaMap: alphaMap,
  });

  const texture = useLoader(THREE.TextureLoader, 'pictures/profile-picture.jpg');
  texture.minFilter = THREE.LinearFilter;

  // Add an array of disco colors
   const discoColors = [
    theme.colors.neonPink,
    theme.colors.neonBlue,
    theme.colors.neonGreen,
    theme.colors.neonOrange,
    theme.colors.neonPurple,
    theme.colors.neonYellow,
  ];


  useFrame(({clock}) => {
    const scale = scroll.range(0.72, 1);
    hologramRef.current.scale.x = scale * 4;
    hologramRef.current.scale.y = scale * 4;
    hologramRef.current.scale.z = scale * 4;
    hologramRef.current.position.y = scale * 40 - 10;

    // Change color of the cylinder
    if (coneRef.current) {
      const elapsedSec = clock.getElapsedTime();
      const index = Math.floor(elapsedSec) % discoColors.length;
      coneRef.current.color.set(discoColors[index]);
    }
  });

  return (
    <group ref={hologramRef}>
      <Billboard>
        <Box args={[20, 20, 1]} position={[0, 5, -1]}>
          <meshBasicMaterial color={theme.colors.frame} />
        </Box>
        <Plane args={[19, 19]} position={[0, 5, 0]}>
          <meshBasicMaterial map={texture} />
        </Plane>
      </Billboard>

      <Cylinder
        args={[.5, 1.4, 1.5, undefined, undefined, true]}
        smoothness={14}
        position={[0, -1.3, 0]}
        scale={14}
        rotation={[0, Math.PI, Math.PI]}
      >
        <meshBasicMaterial
          ref={coneRef}
          color={theme.colors.light}
          transparent
          {...materials}
        />
      </Cylinder>
    </group>
  );
}

export default Hologram;
