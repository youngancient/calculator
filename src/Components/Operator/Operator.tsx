import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IThemeType, del, setIsOperatorClicked } from "../../redux/arithSlice";
import { RootState } from "../../redux/store";

export interface IStyledElement {
  onClick?: React.MouseEventHandler;
  theme : IThemeType;
  symbol ?: string;
}
export interface IElement {
  symbol: string;
}

export const Ele = styled.button<IStyledElement>`
  height: 50px;
  width: 22%;
  display: flex;
  justify-content: center;
  background : ${props => props.symbol === "DEL" ? props.theme.resetBtnColor : props.theme.digitBgColor };
  &:hover{
    background : ${props => props.symbol === "DEL" ? props.theme.resetBtnHover : props.theme.digitHoverBgColor };
  }
  box-shadow: 0px 3.5px 1px 0px ${props => props.symbol === "DEL" ? props.theme.resetBtnKeyShadow : props.theme.keyShadow};
  color : ${props => props.symbol === "DEL" ? "hsl(0, 0%, 100%)" : props.theme.textColor};
  align-items: center;
  h4 {
    font-size: ${props => props.symbol === "DEL" ? "1.2rem" : "2rem"};
  }
  border-radius: 0.5rem;
  @media screen and (min-width: 728px) {
    h4 {
      font-size: ${props => props.symbol === "DEL" ? "1.5rem" : "2.2rem"};
    }
  }
  @media screen and (min-width: 728px) {
    height: 60px;
  }
`;

const Operator: React.FC<IElement> = ({ symbol }) => {
    const dispatch = useAppDispatch();
    const {selectedTheme} = useAppSelector((state: RootState) => state.arith);
    const handleClick =()=>{
        symbol === "DEL" ? dispatch(del()) : dispatch(setIsOperatorClicked(symbol));
    }
  return (
    <Ele onClick={handleClick} theme={selectedTheme} symbol={symbol} >
      <h4>{symbol}</h4>
    </Ele>
  );
};

export default Operator;
