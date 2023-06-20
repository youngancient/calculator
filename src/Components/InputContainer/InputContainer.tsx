import { styled } from "styled-components";
import Digit from "../Digit/Digit";
import Operator from "../Operator/Operator";
import EvalComp from "../EvalComp/EvalComp";
import { IThemeType } from "../../redux/arithSlice";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export interface IContainer {
  theme : IThemeType;
}
export const InputContainerMain = styled.div<IContainer>`
    margin-top : 1.2rem;
    padding : 1.5rem;
    width : 100%;
    background : ${props => (props.theme.inputContainerBgColor)};
    display : flex;
    flex-direction  : column;
    gap: 1rem;
    border-radius : 0.5rem;
    .row{
        display : flex;
        justify-content: space-between;
    }
    @media screen and (min-width: 998px) {
        gap : 1.2rem;
    }
`;

const InputContainer: React.FC = () => {
  const {selectedTheme} = useAppSelector((state: RootState) => state.arith);

  return (
    <InputContainerMain theme={selectedTheme}>
        <div className="row">
          <Digit digit="7" />
          <Digit digit= "8" />
          <Digit digit= "9" />
          <Operator symbol="DEL" />
        </div>
        <div className="row">
          <Digit digit= "4" />
          <Digit digit= "5" />
          <Digit digit= "6" />
          <Operator symbol="+" />
        </div>
        <div className="row">
          <Digit digit= "1" />
          <Digit digit= "2" />
          <Digit digit= "3" />
          <Operator symbol="-" />
        </div>
        <div className="row">
          <Digit digit="." />
          <Digit digit= "0" />
          <Operator symbol="/" />
          <Operator symbol="x" />
        </div>
        <div className="row">
            <EvalComp symbol="RESET" />
            <EvalComp symbol="=" />
        </div>
    </InputContainerMain>
  );
};

export default InputContainer;
