import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #f953c6, #b91d73);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled(motion.div)`
  position: absolute;
  width: 19rem;
  height: 19rem;
  border-radius: 1rem;
  background-color: #ffffff;
`;

function App() {
  return (
    <Background>
      <Box
        transition={{ bounce: 0.6, duration: 2, type: "spring" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
    </Background>
  );
}

export default App;
