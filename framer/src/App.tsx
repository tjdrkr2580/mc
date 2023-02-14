import { motion, Variants } from "framer-motion";
import React from "react";
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

const Box = styled(motion.div)`
  position: absolute;
  width: 19rem;
  height: 19rem;
  border-radius: 1rem;
  background-color: white;
  /* background: linear-gradient(to right, #f953c6, #b91d73); */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const boxVariants: Variants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { borderRadius: "50%" },
  drag: {
    backgroundColor: "rgba(245, 133, 145, 0.8)",
    transition: {
      duration: 1,
    },
  },
};

function App() {
  return (
    <Background>
      <Box
        drag
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      ></Box>
    </Background>
  );
}

export default App;
