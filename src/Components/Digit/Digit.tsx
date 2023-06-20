import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IThemeType, setFirst, setSecond } from "../../redux/arithSlice";
import { RootState } from "../../redux/store";

export interface IDigit {
  digit: number | string;
}
export interface IDigitEle {
  onClick?: React.MouseEventHandler;
  theme: IThemeType;
}

export const DigitEle = styled.button<IDigitEle>`
  background: ${(props) => props.theme.digitBgColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 3.5px 1px 0px ${(props) => props.theme.keyShadow};
  &:hover{
    background: ${(props) => props.theme.digitHoverBgColor};
  }
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
  const { selectedTheme } = useAppSelector((state: RootState) => state.arith);
  const handleClick = () => {
    dispatch(setFirst(digit));
    dispatch(setSecond(digit));
  };
  return (
    <DigitEle onClick={handleClick} theme={selectedTheme}>
      <h4>{digit}</h4>
    </DigitEle>
  );
};

export default Digit;
