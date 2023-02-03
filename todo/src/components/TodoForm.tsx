import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toggleTodo } from "../utils/atoms";

const TodoFormWrapper = styled.div`
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
  width: 300px;
  height: 300px;
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
  const setToggleForm = useSetRecoilState(toggleTodo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const onSubmitTodo = () => {
    setToggleForm(true);
  };
  return (
    <TodoFormWrapper>
      <ToggleFormLayout>
        <h1>Tell me your own plans for today.</h1>
        <section className="input-list">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title.."
          />
          <input
            type="text"
            placeholder="desc..."
            onChange={(e) => setDesc(e.target.value)}
          />
        </section>
        <section className="button-list">
          <button
            className="close"
            onClick={() => {
              setToggleForm(false);
            }}
          >
            Cancel
          </button>
          <button className="submit">Add !</button>
        </section>
      </ToggleFormLayout>
    </TodoFormWrapper>
  );
};

export default TodoForm;