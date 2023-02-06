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
    if (args.source.droppableId === args.destination.droppableId) {
      setTodos((allBoards) => {
        const boardCopy = [...allBoards[args.source.droppableId]];
        const taskObj = boardCopy[args.source.index];
        boardCopy.splice(args.source, 1);
        boardCopy.splice(args.destination.index, 0, taskObj);
        return {
          ...allBoards,
          [args.source.droppableId]: boardCopy,
        };
      });
    } else {
      setTodos((allBoard) => {
        const sourceBoard = [...allBoard[args.source.droppableId]];
        const taskObj = sourceBoard[args.source.index];
        const targetBoard = [...allBoard[args.destination.droppableId]];
        console.log(taskObj, targetBoard);
        sourceBoard.splice(args.source.index, 1);
        targetBoard.splice(args.destination?.index, 0, taskObj);
        return {
          ...allBoard,
          [args.source.droppableId]: sourceBoard,
          [args.destination.droppableId]: targetBoard,
        };
      });
    }
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
