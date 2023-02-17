import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "../components/Model";
import Overlay from "../components/Overlay";
import { Space } from "../components/atoms";
import styled from "styled-components";

const Test = () => {
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

export default Test;

const Full = styled.div`
  height: 100vh;
`;
