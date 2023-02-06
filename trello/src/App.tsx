import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { todoState } from "./atoms";
import Board from "./components/Board";
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
    // setTodos((prev) => {
    //   const copy = [...prev];
    //   copy.splice(args.source.index, 1);
    //   copy.splice(args.destination.index, 0, args.draggableId);
    //   return copy;
    // });
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default App;
