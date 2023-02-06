import React, { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "../atoms";
import Card from "../Card";

interface BoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface DraggableTypes {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Boardd = styled.ul<DraggableTypes>`
  padding: 2.5rem 1rem 2.5rem 1rem;
  border-radius: 0.25rem;
  width: 11rem;
  height: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#c8c8c8"
      : props.isDraggingFromThis
      ? props.theme.color
      : props.theme.color};
  transition: 0.25s ease-in-out background-color;
  flex-grow: 1;
`;

const Form = styled.form`
  display: flex;
  input {
    font-size: 0.8rem;
    width: 8rem;
  }
  button {
    font-size: 0.8rem;
  }
  width: 100%;
`;

interface IForm {
  todo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setTodos = useSetRecoilState(todoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos((allboard) => {
      return {
        ...allboard,
        [boardId]: [newTodo, ...allboard[boardId]],
      };
    });
    setValue("todo", "");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Boardd
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, index) => (
              <Card
                key={todo.id}
                todoId={todo.id}
                todoText={todo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Boardd>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
