import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import FirstPage from "./ui/FirstPage";
import SecondPage from "./ui/SecondPage";
import { useStateData } from "./context/StateContextProvider";

const AppWrapper = styled.div`
  width: 95vw;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 786px) {
    max-width: 700px;
    padding-top: 2rem;
  }
`;

const Logo = styled.img`
  width: 150px;
  @media screen and (min-width: 786px) {
    width: 250px;
  }
`;

function App() {
  const { state } = useStateData();
  return (
    <AppWrapper>
      <GlobalStyles />
      <Logo alt="logo" src="/images/logo-full.svg" />
      {!state.isVerified ? <FirstPage /> : <SecondPage />}
    </AppWrapper>
  );
}

export default App;
