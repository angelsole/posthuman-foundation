
import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


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
    <Hidden smDown>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={3} >
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
    </Hidden>
    <Hidden smUp>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Hidden>
  </HeaderContainer>
)

export default Header;