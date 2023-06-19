import { styled } from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export const DisplayCont = styled.div`
  border: 2px solid black;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  border-radius: 0.5rem;
  justify-content: space-between;
  padding: 1.5rem;
  grid-gap: 0.5rem;
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
    background: #000;
    display: inline-block;
    animation: cursor-blink 1.5s steps(2) infinite;
  }

  .sign {
    display: flex;
    align-items: center;
  }
  .number {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
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

// I only hae 2 things left
// 1. how to manage overflow of the result div
// 2. theme and colors
const Display: React.FC = () => {
  const arith = useAppSelector((state: RootState) => state.arith);
  const firstNum = arith.firstData;
  const secondNum = arith.secondData;
  const operator = arith.operator;
  const isOperatorClicked = arith.isOperatorClicked;
  return (
    <DisplayCont>
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
