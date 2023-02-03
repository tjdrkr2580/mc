import { useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
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
`;

function App() {
  const isDarkmode = useRecoilValue(darkmodeState);
  return (
    <ThemeProvider theme={isDarkmode === true ? darkTheme : lightTheme}>
      <GlobalStyle />
      <TodoWrapper>
        <Header />
      </TodoWrapper>
    </ThemeProvider>
  );
}

export default App;
