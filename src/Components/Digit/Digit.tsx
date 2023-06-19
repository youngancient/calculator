import { styled } from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { setFirst, setSecond } from "../../redux/arithSlice";

export interface IDigit {
  digit: number | string;
}
export interface IDigitEle {
    onClick?: React.MouseEventHandler
}

export const DigitEle = styled.button<IDigitEle>`
  border: 2px solid #000;
  height: 55px;
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
    height: 60px;
  }
  @media screen and (min-width: 998px) {
  }
`;

const Digit: React.FC<IDigit> = ({ digit }) => {
  const dispatch = useAppDispatch();
  const handleClick =()=>{
    dispatch(setFirst(digit));
    dispatch(setSecond(digit));
  }
  return (
    <DigitEle onClick={handleClick}>
      <h4>{digit}</h4>
    </DigitEle>
  );
};

export default Digit;
