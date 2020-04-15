
import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import { Grid } from '@material-ui/core';

import NavBar from '../NavBar';

import logo from '../../assets/images/logo-black.svg';

const Logo = styled.img`
  height: 100%;
  width: 100%;
`
const Title = styled.p`
  color: white;
  font-family: 'SpaceRanger';
  font-size: 24px;
  margin-left: 15px;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const DesktopHeader = () => (
  <Grid
    container
    spacing={3}
    justify="space-between"
    alignItems="center"
  >
    <Grid item sm={3} >
      <StyledLink to="/">
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item sm={2}>
            <Logo alt="Posthuman Foundation Logo" src={logo} />
          </Grid>
          <Grid item sm={10}>
            <Title>Posthuman Foundation</Title>
          </Grid>
        </Grid>
      </StyledLink>
    </Grid>
      <Grid item sm={9}>
        <NavBar />
      </Grid>
  </Grid>
)

export default DesktopHeader;