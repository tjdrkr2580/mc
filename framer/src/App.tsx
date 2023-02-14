import { motion, Variants } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #f953c6, #b91d73);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BiggerBox = styled(motion.div)`
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center; ;
`;

const Box = styled(motion.div)`
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  background-color: white;
  /* background: linear-gradient(to right, #f953c6, #b91d73); */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const boxVariants: Variants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { borderRadius: "50%" },
  drag: {
    transition: {
      duration: 1,
    },
  },
};

function App() {
  const BiggerBoxRef = useRef(null);
  return (
    <Background>
      <BiggerBox ref={BiggerBoxRef}>
        <Box
          dragSnapToOrigin
          dragElastic={0.5}
          drag
          dragConstraints={BiggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        ></Box>
      </BiggerBox>
    </Background>
  );
}

export default App;
