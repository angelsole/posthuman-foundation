import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryBlue: "#0F4C81",
    secondaryBlue: "#212D40",
    primaryBlack: "#11151C",
    primaryOrange: "#D66853"
  },
  fonts: ["sans-serif", "Roboto", "SpaceRanger"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const PrimaryTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default PrimaryTheme;