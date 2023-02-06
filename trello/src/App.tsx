import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Wrapper = styled.div`
  display: flex;
  max-width: 48rem;
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

const Card = styled.div`
  width: 90%;
  border-radius: 0.25rem;
  background-color: #e8e8e7;
  padding: 0.5rem 0.5rem;
`;

const toDos = ["밥먹기", "똥싸기", "잠자기", "공부하기"];

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
  const onDragEnd = () => {};
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
                    <Draggable draggableId={todo} index={index}>
                      {(magic) => (
                        <Card
                          ref={magic.innerRef}
                          {...magic.draggableProps}
                          {...magic.dragHandleProps}
                        >
                          {todo}
                        </Card>
                      )}
                    </Draggable>
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
