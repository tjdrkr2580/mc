import React from "react";
import styled from "styled-components";
import ToggleMode from "./ToggleMode";

const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  h1 {
    font-size: 3rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Today Do It!</h1>
      <ToggleMode />
    </HeaderWrapper>
  );
};

export default Header;
