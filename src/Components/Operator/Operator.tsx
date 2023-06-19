import { styled } from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { del, setIsOperatorClicked } from "../../redux/arithSlice";

export interface IStyledElement {
  bg?: string;
  onClick?: React.MouseEventHandler
}
export interface IElement {
  symbol: string;
  bg?: string;
}

export const Ele = styled.button<IStyledElement>`
  border: 2px solid #000;
  height: 50px;
  width: 22%;
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
  }
  @media screen and (min-width: 728px) {
    height: 60px;
  }
`;

const Operator: React.FC<IElement> = ({ symbol, bg }) => {
    const dispatch = useAppDispatch();
    const handleClick =()=>{
        symbol === "DEL" ? dispatch(del()) : dispatch(setIsOperatorClicked(symbol));
    }
  return (
    <Ele bg={bg} onClick={handleClick}>
      <h4>{symbol}</h4>
    </Ele>
  );
};

export default Operator;
