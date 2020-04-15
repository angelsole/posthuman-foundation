
import React from "react"
import PrimaryTheme from '../../templates/PrimaryTheme';
import Header from '../Header';

const MainLayout = ({ children }) => (
  <PrimaryTheme>
    <Header />
    { children }
  </PrimaryTheme>
);

export default MainLayout;