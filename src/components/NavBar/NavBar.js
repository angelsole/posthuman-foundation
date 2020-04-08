
import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"


const NavBarContainer = styled.nav`
  flex: 0 1 auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`;

const NavBarList = styled.ul`
  display: flex;
`;
const NavBarItem = styled.li`
  flex: 0 1 auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  display: inline-block;
  padding-right: 35px;
`;

const NavBar = () => (
  <NavBarContainer>
    <NavBarList>
      <NavBarItem>
        <Link to="/item1">
          item 1
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/item2">
          item 2
        </Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/item3">
          item 3
        </Link>
      </NavBarItem>
    </NavBarList>
  </NavBarContainer>
)

export default NavBar;