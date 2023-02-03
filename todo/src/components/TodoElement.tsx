import React from "react";
import styled from "styled-components";

interface typeType {
  type: boolean;
}

const TodoElementWrapper = styled.ul``;

const TodoElementLiWrapper = styled.li``;

const TodoElement = ({ type }: typeType) => {
  return <div>TodoElement</div>;
};

export default TodoElement;
