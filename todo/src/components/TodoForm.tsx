import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TodoType } from "../types/type";
import { todoState, toggleTodo } from "../utils/atoms";

const TodoFormWrapper = styled.div`
  z-index: 999;
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ToggleFormLayout = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 30rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.6rem;
  }
  input {
    padding: 0.4rem 0.6rem;
    width: 20rem;
    color: ${(props) => props.theme.color};
    background-color: transparent;
    border: none;
    height: 4rem;
    font-size: 1.4rem;
    &:focus {
      outline: none;
    }
  }
  .input-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .button-list {
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    gap: 2rem;
    margin-right: 5rem;
  }
`;

const TodoForm = () => {
  const [isToggle, setIsToggle] = useRecoilState(toggleTodo);
  const [todoInfo, setTodoInfo] = useState<TodoType>({
    title: "",
    description: "",
    isSuccess: false,
  });
  const setTodos = useSetRecoilState(todoState);
  const onSubmitTodo = () => {
    if (todoInfo.title !== "" && todoInfo.description !== "") {
      setTodos((prev) => [...prev, todoInfo]);
    } else {
      alert("Please enter it correctly!");
    }
    setIsToggle(false);
  };
  return (
    <>
      {isToggle === false ? null : (
        <TodoFormWrapper>
          <ToggleFormLayout>
            <h1>Tell me your own plans for today.</h1>
            <section className="input-list">
              <input
                type="text"
                onChange={(e) =>
                  setTodoInfo({ ...todoInfo, title: e.target.value })
                }
                placeholder="title.."
              />
              <input
                type="text"
                placeholder="desc..."
                onChange={(e) =>
                  setTodoInfo({ ...todoInfo, description: e.target.value })
                }
              />
            </section>
            <section className="button-list">
              <button
                className="close"
                onClick={() => {
                  setIsToggle(false);
                }}
              >
                Cancel
              </button>
              <button
                className="submit"
                onClick={() => {
                  onSubmitTodo();
                }}
              >
                Add !
              </button>
            </section>
          </ToggleFormLayout>
        </TodoFormWrapper>
      )}
    </>
  );
};

export default TodoForm;
