import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { evaluate, reset } from "../../redux/arithSlice";
import { IStyledElement } from "../Operator/Operator";
import { RootState } from "../../redux/store";

export const EvalCompBtn = styled.button<IStyledElement>`
  height: 55px;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3.5px 1px 0px ${props => props.symbol === "RESET" ? props.theme.resetBtnKeyShadow : props.theme.equalBtnKeyShadow};
  background : ${props => props.symbol === "=" ? props.theme.equalBtnColor : props.theme.resetBtnColor};
  color : hsl(0, 0%, 100%);
  h4 {
    font-size: ${props => props.symbol === "RESET" ? "1.2rem" : "2rem"};
  }
  border-radius: 0.5rem;
  &:hover{
    background : ${props => props.symbol === "=" ? props.theme.equalBtnHover : props.theme.resetBtnHover};
  }
  @media screen and (min-width: 728px) {
    h4 {
      font-size: ${props => props.symbol === "RESET" ? "1.5rem" : "2.2rem"};
    }
    height: 60px;
  }
  @media screen and (min-width: 998px) {
  }
`;
export interface IEvalComp {
  symbol: string;
}
const EvalComp: React.FC<IEvalComp> = ({ symbol }) => {
  const dispatch = useAppDispatch();
  const {selectedTheme} = useAppSelector((state: RootState) => state.arith);
  const handleClick = () => {
    symbol === "=" ? dispatch(evaluate()) : dispatch(reset());
  };

  return (
    <EvalCompBtn onClick={handleClick} theme={selectedTheme} symbol={symbol}>
      <h4>{symbol}</h4>
    </EvalCompBtn>
  );
};

export default EvalComp;
