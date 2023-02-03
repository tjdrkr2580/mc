import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toggleTodo } from "../utils/atoms";

const TodoWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: 0.25s transform;
  &:hover {
    transform: rotate(15deg);
  }
`;

const TodoAdd = () => {
  const setToggleAdd = useSetRecoilState(toggleTodo);
  const onClickAdd = () => {
    setToggleAdd(true);
  };
  return (
    <TodoWrapper onClick={onClickAdd}>
      <AiOutlinePlus size={24} />
    </TodoWrapper>
  );
};

export default TodoAdd;
