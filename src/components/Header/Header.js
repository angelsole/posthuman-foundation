
import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"

import NavBar from '../NavBar';

import logo from '../../assets/images/logo.svg';

const HeaderContainer = styled.header`
  transition-property: transform,height,-webkit-transform;
  position: fixed;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 100;
`

const HeaderContent = styled.div`
  max-width: 1515px;
  padding: 0 40px;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  transition: transform .2s ease,-webkit-transform .2s ease;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
`

const StyledLink = styled(props => <Link {...props} />)`
  height: 100%;
  position: relative;
  z-index: 100;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <StyledLink to="/">
        <Logo alt="Posthuman Foundation Logo" src={logo} />
      </StyledLink>
      <NavBar />
    </HeaderContent>
  </HeaderContainer>
)

export default Header;