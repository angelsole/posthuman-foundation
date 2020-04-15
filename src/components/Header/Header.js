
import React from "react"
import styled from "styled-components"
import { Hidden } from '@material-ui/core';

import MobileHeader from './MobileHeader';
import DesktopHeader from "./DesktopHeader";

const HeaderContainer = styled.div`
  @media (min-width: 960px) {
    padding: 20px;
  }
`

const Header = () => (
  <HeaderContainer>
    <Hidden smDown>
      <DesktopHeader />
    </Hidden>
    <Hidden mdUp>
      <MobileHeader />
    </Hidden>
  </HeaderContainer>
)

export default Header;