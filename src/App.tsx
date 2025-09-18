import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import TextComparePage from "./pages/TextComparePage";
import NavBar from "./components/NavBar";

const UniversalStyle = createGlobalStyle`
  *,*::after, *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Helvetica;
    font-weight: 400;
  }
  @font-face {
      font-family: 'Helvetica';
      src: url('fonts/Helvetica.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
    font-family: 'Helvetica';
    src: url('fonts/Helvetica-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

const AppStyle = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppStyle>
      <UniversalStyle />
      <NavBar />
      <TextComparePage />
    </AppStyle>
  );
}

export default App;
