import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90%;
  border-radius: 0.25rem;
  background-color: #e8e8e7;
  padding: 0.5rem 0.5rem;
`;

interface propsType {
  todo: string;
  index: number;
}

const Card = ({ todo, index }: propsType) => {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <CardWrapper
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </CardWrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
