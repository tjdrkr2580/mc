import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TodoType } from "../types/type";
import { todoState } from "../utils/atoms";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

const TodoListWrapper = styled.ul`
  width: 100vw;
  padding-top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
`;

const GridWrapper = styled.div`
  min-width: 340px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  gap: 2rem;
`;

const DoList = styled.li`
  cursor: pointer;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 30rem;
  height: 15rem;
  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      font-weight: 700;
      font-size: 1.6rem;
    }
    p {
      width: 20rem;
      word-wrap: break-word;
      word-break: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 1.2rem;
    }
  }
  .doit {
    color: #19eb19;
    &:hover {
      filter: brightness(80%);
    }
  }
  .cancel {
    color: #333;
    &:hover {
      filter: brightness(80%);
    }
  }
  .remove {
    color: #f22222;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const removeTodo = (title: string | undefined) => {
    const newTodos = todos.filter((todo) => todo.title !== title);
    setTodos(newTodos);
    // setTodos([...todos, newTodos[0]]);
  };
  const updateTodo = (title: string | undefined) => {
    setTodos(
      todos.map((todo) =>
        todo.title === title ? { ...todo, isSuccess: !todo.isSuccess } : todo
      )
    );
  };
  return (
    <TodoListWrapper>
      <h1 className="title">To do!</h1>
      <GridWrapper>
        {todos.map((todo: TodoType) =>
          todo.isSuccess === false ? (
            <DoList key={Math.random()}>
              <div className="text-wrapper">
                <span>{todo.title}</span>
                <p>{todo.description}</p>
              </div>
              <div className="icon-wrapper">
                <button>
                  <AiFillCheckCircle
                    onClick={() => updateTodo(todo.title)}
                    className="doit"
                    size={24}
                  />
                </button>
                <button onClick={() => removeTodo(todo.title)}>
                  <AiOutlineClose className="remove" size={24} />
                </button>
              </div>
            </DoList>
          ) : null
        )}
      </GridWrapper>
      <h1 className="title">Success ✅</h1>
      <GridWrapper>
        {todos.map((todo: TodoType) =>
          todo.isSuccess === true ? (
            <DoList key={Math.random()}>
              <div className="text-wrapper">
                <span>{todo.title}</span>
                <p>{todo.description}</p>
              </div>
              <div className="icon-wrapper">
                <button>
                  <AiFillCheckCircle
                    onClick={() => updateTodo(todo.title)}
                    className="cancel"
                    size={24}
                  />
                </button>
                <button onClick={() => removeTodo(todo.title)}>
                  <AiOutlineClose className="remove" size={24} />
                </button>
              </div>
            </DoList>
          ) : null
        )}
      </GridWrapper>
    </TodoListWrapper>
  );
};

export default TodoList;
