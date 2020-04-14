
import React from "react"
import styled from "styled-components"

import Header from '../Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
);

export default MainLayout;