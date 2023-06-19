import { styled } from "styled-components";
import { MUISwitch } from "./Switch";

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
  return (
    <HeaderCont>
      <div className="name">
        <h3>calc</h3>
      </div>
      <div className="theme-switch">
        <h4>THEME</h4>
        <MUISwitch />
        
      </div>
    </HeaderCont>
  );
};

export default Header;
