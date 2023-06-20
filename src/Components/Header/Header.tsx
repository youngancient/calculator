import { styled } from "styled-components";
import { MUISwitch } from "./Switch";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { switchTheme } from "../../redux/arithSlice";

export const HeaderCont = styled.header`
  display: flex;
  align-items : center;
  justify-content: space-between;
  width: 100%;
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
  console.log(selectedTheme);
  const dispatch = useAppDispatch();
  const handleTheme =()=>{
    dispatch(switchTheme());
  }
  return (
    <HeaderCont>
      <div className="name">
        <h3>calc</h3>
      </div>
      <div className="theme-switch">
        <h4>THEME</h4>
        <MUISwitch onClick={handleTheme} />
        
      </div>
    </HeaderCont>
  );
};

export default Header;
