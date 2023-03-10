import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkmodeState } from "../utils/atoms";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ToggleModeBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  svg {
    cursor: pointer;
    &:hover {
      transition: 0.25s color;
      color: #ecd777;
    }
  }
`;

const ToggleMode = () => {
  const [isDarkmode, setIsDarkmode] = useRecoilState(darkmodeState);
  const onClickToggle = () => {
    setIsDarkmode(!isDarkmode);
    localStorage.setItem("T-darkmode", String(!isDarkmode));
  };
  return (
    <ToggleModeBtn onClick={onClickToggle}>
      {isDarkmode === true ? (
        <BsMoonFill size={26} />
      ) : (
        <BsFillSunFill size={30} />
      )}
    </ToggleModeBtn>
  );
};

export default ToggleMode;
