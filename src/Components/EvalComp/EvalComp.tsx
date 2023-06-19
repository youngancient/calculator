import { styled } from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { evaluate, reset } from "../../redux/arithSlice";
import { IStyledElement } from "../Operator/Operator";

export const EvalCompBtn = styled.button<IStyledElement>`
  border: 2px solid #000;
  height: 55px;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 2rem;
  }
  border-radius: 0.5rem;
  @media screen and (min-width: 728px) {
    h4 {
      font-size: 2.2rem;
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
  const handleClick = () => {
    symbol === "=" ? dispatch(evaluate()) : dispatch(reset());
  };

  return (
    <EvalCompBtn onClick={handleClick}>
      <h4>{symbol}</h4>
    </EvalCompBtn>
  );
};

export default EvalComp;
