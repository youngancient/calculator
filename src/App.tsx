import "./App.css";
import { styled } from "styled-components";
import Header from "./Components/Header/Header";
import Display from "./Components/Display/Display";
import InputContainer from "./Components/InputContainer/InputContainer";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { IThemeType } from "./redux/arithSlice";


export interface IMainContainer{
  theme : IThemeType;
}
export const MainContainer = styled.div<IMainContainer>`
  background: ${ props => (props.theme.bgColor)};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0rem 1.25rem 0rem;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 1rem;
  width :100%;
  @media screen and (min-width: 728px) {
    padding : 0rem;
    width: 50%;
  }
  @media screen and (min-width: 998px) {
    width: 35%;
  }
`;

function App() {
  const {selectedTheme} = useAppSelector((state: RootState) => state.arith);
  return (
    <MainContainer theme={selectedTheme}>
      <InnerContainer>
        <Header />
        <Display />
        <InputContainer />
      </InnerContainer>
    </MainContainer>
  );
}

export default App;
