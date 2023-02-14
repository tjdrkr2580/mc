import { motion, Variants } from "framer-motion";
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 19rem;
  height: 19rem;
  border-radius: 1rem;
  background: linear-gradient(to right, #f953c6, #b91d73);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Circle = styled(motion.section)`
  background-color: #ffffff;
  place-self: center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

const boxVariants: Variants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    type: "spring",
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Background>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Background>
  );
}

export default App;
