import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardWrapper = styled.div<{ isDragging: boolean }>`
  width: 90%;
  border-radius: 0.25rem;
  background-color: ${(props) => (!props.isDragging ? "#ececec" : "#b6b5b5")};
  transition: 0.25s ease-in-out background-color;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0.5rem 0.5rem;
`;

interface propsType {
  todoId: number;
  todoText: string;
  index: number;
}

const Card = ({ todoId, todoText, index }: propsType) => {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(magic, snapshot) => (
        <CardWrapper
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todoText}
        </CardWrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
