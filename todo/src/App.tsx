import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { darkmodeState } from "./utils/atoms";
import { GlobalStyle } from "./utils/GlobalStyle";
import { darkTheme, lightTheme } from "./utils/theme";

const TodoWrapper = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
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
  useEffect(() => {
    console.log(window.localStorage.getItem("todos"));
  }, []);
  return (
    <ThemeProvider theme={isDarkmode === true ? darkTheme : lightTheme}>
      <GlobalStyle />
      <TodoWrapper>
        <Header />
        <TodoForm />
      </TodoWrapper>
    </ThemeProvider>
  );
}

export default App;
