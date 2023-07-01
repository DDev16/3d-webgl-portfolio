import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PointLight } from "three"; 

const Lightning = ({ position }) => {
  const { scene } = useThree();
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntensity(Math.random() > 0.95 ? 30 : 0);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scene.lights && scene.lights.length > 0) {
      scene.lights[0].intensity = intensity;
    } else {
      const light = new PointLight(0xffffff, intensity, 100);
      light.position.set(position[0], position[1], position[2]);
      scene.add(light);
      scene.lights = [light];
    }
  }, [intensity, position, scene]); // add position and scene here

  return null;
};

export default Lightning;
