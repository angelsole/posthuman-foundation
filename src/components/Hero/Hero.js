
import React from "react"
import styled from "styled-components"

import heroBackground from '../../assets/images/rsz_sunspace.jpg';

const Section = styled.section`
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const Hero = () => (
  <Section>
    hola
  </Section>
);

export default Hero;