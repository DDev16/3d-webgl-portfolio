import React, { Suspense, useMemo, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { isMobile } from 'react-device-detect';
import {
  ScrollControls,
  DeviceOrientationControls,
  OrbitControls,
  Scroll,
  Float,
  Text,
  Cloud
} from '@react-three/drei';

import Bloom from '~/src/3d-components/Bloom';
import useStore from '../context/mainStore';
import MainCamera from './Camera';
import { Cube, Track, StarsField as Stars, Logo } from '../3d-components';
import ScrollReminderPage from '../components/scrollReminderPage';
import Hologram from '../3d-components/hologram';
import Rocket from '../3d-components/rocket/Rocket.js'; // Import the Rocket component
import Moon from '../3d-components/moon/Moon.js'
import Earth from '../3d-components/earth/Earth.js'
import Sun from '../3d-components/sun/Sun.js'
import UfoGuy from '../3d-components/ufoguy/UfoGuy';
import Flag from '../3d-components/moon/Flag';
import SkyBox from '../3d-components/cube/components/skybox/Skybox';
import Sky from '../stars.jpg'
import Lightning from '../3d-components/lightning/Lightning.js';

function MainScene () {

  const earthRef = useRef(); // Create a ref to access the Earth component

  const floatingCamera = useStore((state) => state.floatingCamera);
  const currentScale = useMemo(
    () => (isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]),
    []
  );

  useEffect(() => {
    let animationFrameId = null;

    const animate = () => {
      // Update the rotation of the Earth
      if (earthRef.current && earthRef.current.rotation) {
        earthRef.current.rotation.y += .01; // Adjust the rotation speed as desired
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Canvas
      style={{
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = gl.PCFSoftShadowMap; // default THREE.PCFShadowMap
      }}
    >
      <ScrollControls damping={8} distance={1} pages={8}>
      <SkyBox textureUrl={Sky} /> 
        <Scroll html>
          <ScrollReminderPage />
        </Scroll>
        <Bloom>
          <Stars />
          <Lightning position={[220, -5, -20]} scale={[.01, .01, .01]} /> 

          <Cloud position={[220, -50, -10]} scale={[3, 3, 3]} />
          <Cloud position={[300, -150, 70]} scale={[4, 4, 4]} />
          <Cloud position={[750, -100, 70]} scale={[3, 3, 3]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[100, 100, 10]} intensity={1.2} />

          {floatingCamera &&
            (isMobile ? <DeviceOrientationControls /> : <OrbitControls />)}
          <Track />
          <MainCamera />
          {/* <Rocket position={[85, 25, 130]} scale={[.5, .5, .5]} rotation={[Math.PI / 51, 550, .3]} /> */}
          <Flag position={[-125, 170, 120]} scale={[10, 10, 10]} rotation={[Math.PI / 80, 0, 0]} />

          <Moon position={[-125, 100, 120]} scale={[150, 150, 150]} rotation={[Math.PI / 1, -520, .3]} />
          <Earth ref={earthRef} position={[355, -100, 30]} scale={[55, 55, 55]} />
          <Sun position={[878, 100, -69]} scale={[175, 175, 175]} rotation={[Math.PI / 51, 550, .3]} />

          <Suspense
            fallback={
              <Text
                fontSize={24}
                rotation={[Math.PI / 0.8, Math.PI / 0.57, Math.PI / 0.845]}
              >
                Loading Dev Portal...
              </Text>
            }
          >
            <Float scale={currentScale}>
              <Logo />
              <Rocket position={[125, 25, 250]} scale={[.5, .5, .5]} rotation={[Math.PI / 51, 550, .3]} />
              <UfoGuy position={[245, 25, -330]} scale={[.1, .1, .1]} rotation={[Math.PI / 51, 50, .3]} />
              <Cloud position={[245 , 35, 220]} scale={[5, 5, 5]} />

              <Hologram />
              <Cube position={[0, 0, 0]} />
            </Float>
          </Suspense>
        </Bloom>
      </ScrollControls>
    </Canvas>
  );
}

export default MainScene;
