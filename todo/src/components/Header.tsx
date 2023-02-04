import React from "react";
import styled from "styled-components";
import TodoAdd from "./TodoAdd";
import ToggleMode from "./ToggleMode";

const HeaderWrapper = styled.header`
  z-index: 998;
  width: 100vw;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  height: 3rem;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  h1 {
    cursor: pointer;
    font-size: 3rem;
    transition: 0.25s letter-spacing;
    &:hover {
      letter-spacing: 0.15rem;
    }
  }
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Today Do It!</h1>
      <IconList>
        <ToggleMode />
        <TodoAdd />
      </IconList>
    </HeaderWrapper>
  );
};

export default Header;
