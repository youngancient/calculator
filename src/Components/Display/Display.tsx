import { styled } from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { IThemeType } from "../../redux/arithSlice";

export interface IDisplay {
  theme : IThemeType;
  firstnum : string;
}
export const DisplayCont = styled.div<IDisplay>`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  border-radius: 0.5rem;
  justify-content: space-between;
  padding: 1.5rem;
  grid-gap: 0.5rem;
  color : ${props => (props.theme.displayTextColor)};
  background : ${props => (props.theme.displayColor)};
  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
  h3 {
    font-size: 2.5rem;
    padding-top: 8px;
  }
  h3::after {
    content: "";
    width: 4px;
    height: 27px;
    margin-left: 4px;
    background:  ${props => (props.theme.displayTextColor)};
    display: ${props => (props.firstnum === "undefined" || props.firstnum === "NaN") ? "none": "inline-block"};
    animation: cursor-blink 1.5s steps(2) infinite;
  }

  .sign {
    display: flex;
    align-items: center;
  }
  .number {
    width: 100%;
    max-width : 100%;
    display: flex;
    flex-direction : row;
    justify-content: right;
    align-items: center;
    overflow : hidden;
  }
  h3{
    overflow : scroll;
    width : 400%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 728px) {
    h3 {
      font-size: 2.8rem;
    }
    h3::after {
        content: "";
        width: 4px;
        height: 32px;
      }
  }
  @media screen and (min-width: 728px) {
    h3 {
      font-size: 3rem;
    }
  }
`;

// I only hae 1 thing left
// 1. how to manage overflow on the display screen

const Display: React.FC = () => {
  const arith = useAppSelector((state: RootState) => state.arith);
  const firstNum = arith.firstData;
  const secondNum = arith.secondData;
  const operator = arith.operator;
  const isOperatorClicked = arith.isOperatorClicked;
  const selectedTheme = arith.selectedTheme;
  const lenOfFirst = firstNum.length;
  const lenOfSecond = secondNum.length;

  return (
    <DisplayCont theme={selectedTheme} firstnum={firstNum}>
      <div className="sign">
        {isOperatorClicked ? <h2>{operator}</h2> : <></>}
      </div>
      <div className="number">
        <h3>{!isOperatorClicked? firstNum : secondNum}</h3>
      </div>
    </DisplayCont>
  );
};

export default Display;
