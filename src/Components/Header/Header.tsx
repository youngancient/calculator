import { styled } from "styled-components";
import { MUISwitch } from "./Switch";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { IThemeType, setSelectedTheme, switchTheme } from "../../redux/arithSlice";
import { useEffect } from "react";

export interface IHeader {
  chosentheme ?: IThemeType;
}
export const HeaderCont = styled.header<IHeader>`
  display: flex;
  align-items : center;
  justify-content: space-between;
  width: 100%;
  color : ${props => (props.chosentheme?.displayTextColor)};
  .theme-switch{
    display: flex;
    gap : 1rem;
    align-items : center;
    justify-content: center;
  }
  h3{
    font-size: 2.2rem;
    font-weight : 700;
  }
  h4{
    font-size: 1rem;
  }
  @media screen and (min-width: 728px) {
    h3{
        font-size: 2.5rem;
    }
  }
`;

const Header: React.FC = () => {
  const {theme} = useAppSelector((state: RootState) => state.arith);
  const selectedTheme = theme.find(ele => ele.selected === true);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(setSelectedTheme(selectedTheme));
  },[selectedTheme, dispatch]);

  const handleTheme =()=>{
    dispatch(switchTheme());
  }
  return (
    <HeaderCont chosentheme={selectedTheme}>
      <div className="name">
        <h3>calc</h3>
      </div>
      <div className="theme-switch">
        <h4>THEME</h4>
        <MUISwitch onClick={handleTheme} selectedtheme={selectedTheme}/>
        
      </div>
    </HeaderCont>
  );
};

export default Header;
