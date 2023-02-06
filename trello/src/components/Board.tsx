import React, { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "../Card";

interface BoardProps {
  toDos: string[];
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

const Board = ({ toDos, boardId }: BoardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      {/* <input ref={inputRef} type="text" placeholder="...write" />
      <button onClick={onClick}>버튼</button> */}
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Boardd
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, index) => (
              <Card key={todo} todo={todo} index={index} />
            ))}
            {magic.placeholder}
          </Boardd>
        )}
      </Droppable>
    </>
  );
};

export default Board;
