import ReactDOM from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const { camera } = useThree();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {});

  useEffect(() => {
    camera.position.z = 1;
  }, []);
  return (
    <mesh {...props} ref={mesh} scale={[0.5, 0.5, 0.5]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
function canvasContainer() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default canvasContainer;
