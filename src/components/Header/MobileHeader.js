
import React, { useState } from "react"
import styled from "styled-components"
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Grid,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import menuOptions from '../../utils/menuOptions';

import logo from '../../assets/images/logo-black.svg';


const Logo = styled.img`
  max-width: 45px;
`

const StyledMaterialTitle= styled(props => <Typography {...props} />)`
  font-family: 'SpaceRanger' !important;
  font-size: 1rem !important;
`;
const StyledMaterialItem= styled(props => <ListItem {...props} />)`
  font-family: 'SpaceRanger' !important;
`;

const MobileHeader = () => {

  const [isOpenDrawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!isOpenDrawer);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
            container
            spacing={2}
            alignItems="center"
            justify="space-between"
          >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              onClick={toggleDrawer}
            />
          </IconButton>
          <Drawer
            open={isOpenDrawer}
            onClose={toggleDrawer}
          >
            <List>
              {menuOptions.map(item => (
                <StyledMaterialItem>{item.name}</StyledMaterialItem>
              ))}
            </List>
            </Drawer>
          <StyledMaterialTitle variant="h6">Posthuman foundation</StyledMaterialTitle>
          <Logo alt="Posthuman Foundation Logo" src={logo} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MobileHeader;