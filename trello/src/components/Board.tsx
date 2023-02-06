import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "../Card";

const Boardd = styled.ul`
  padding: 2.5rem 1rem 2.5rem 1rem;
  min-height: 5rem;
  border-radius: 0.25rem;
  width: 12.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.boardColor};
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  console.log(toDos);
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Boardd ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((todo, index) => (
            <Card key={todo} todo={todo} index={index} />
          ))}
          {magic.placeholder}
        </Boardd>
      )}
    </Droppable>
  );
};

export default Board;
