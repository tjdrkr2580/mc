import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TodoType } from "../types/type";
import { todoState } from "../utils/atoms";

const TodoListWrapper = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
`;

const DoList = styled.li`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  height: 6.5rem;
`;

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  console.log(todos);
  return (
    <TodoListWrapper>
      {todos.map((todo: TodoType) => (
        <DoList>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </DoList>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
