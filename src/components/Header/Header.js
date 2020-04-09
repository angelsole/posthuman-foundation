
import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import { Grid } from '@material-ui/core';

import NavBar from '../NavBar';

import logo from '../../assets/images/logo.svg';

const Logo = styled.img`
  height: 100%;
  width: 100%;
`
const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin-left: 15px;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  padding: 20px;
`


const Header = () => (
  <HeaderContainer>
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={3}>
        <StyledLink to="/">
          <Grid
            container
            spacing={2}
            alignItems="center"
          >
            <Grid item xs={2}>
              <Logo alt="Posthuman Foundation Logo" src={logo} />
            </Grid>
            <Grid item xs={10}>
              <Title>Posthuman Foundation</Title>
            </Grid>
          </Grid>
        </StyledLink>
      </Grid>
      <Grid item xs={9}>
        <NavBar />
      </Grid>
    </Grid>
  </HeaderContainer>
)

export default Header;