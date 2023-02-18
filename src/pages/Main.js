import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model, Overlay } from "../components";
import styled from "styled-components";

const Main = () => {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <Full>
      <Canvas shadows eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </Full>
  );
};

export default Main;

const Full = styled.div`
  height: 100vh;
`;
