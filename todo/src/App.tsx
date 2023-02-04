import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { darkmodeState } from "./utils/atoms";
import { GlobalStyle } from "./utils/GlobalStyle";
import { darkTheme, lightTheme } from "./utils/theme";

const TodoWrapper = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.color};
  svg {
    color: ${(props) => props.theme.color};
  }
  .close {
    color: white;
    background: #333;
  }
  .submit {
    color: white;
    background: ${(props) => props.theme.primary};
  }
`;

function App() {
  const isDarkmode = useRecoilValue(darkmodeState);
  return (
    <ThemeProvider theme={isDarkmode === true ? darkTheme : lightTheme}>
      <GlobalStyle />
      <TodoWrapper>
        <Header />
        <TodoForm />
        <TodoList />
      </TodoWrapper>
    </ThemeProvider>
  );
}

export default App;
