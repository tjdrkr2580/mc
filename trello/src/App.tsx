import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { todoState } from "./atoms";
import Card from "./Card";
import { theme } from "./theme";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const Board = styled.ul`
  padding: 2.5rem 1rem 2.5rem 1rem;
  min-height: 5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.boardColor};
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    list-style: none;
  }
`;

const App = () => {
  const [toDos, setTodos] = useRecoilState(todoState);
  const onDragEnd = (args: any) => {
    if (args.destination.index === args.source.index) return;
    setTodos((prev) => {
      const copy = [...prev];
      copy.splice(args.source.index, 1);
      copy.splice(args.destination.index, 0, args.draggableId);
      return copy;
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((todo, index) => (
                    <Card key={todo} todo={todo} index={index} />
                  ))}
                  {magic.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default App;
