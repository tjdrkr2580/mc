import React from "react";
import styled from "styled-components";

const TodoListWrapper = styled.ul`
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

const TodoList = () => {
  return <div>TodoList</div>;
};

export default TodoList;
