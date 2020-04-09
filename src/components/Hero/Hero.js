
import React from "react"
import styled from "styled-components"

import space from '../../assets/videos/space_earth.mp4';

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Hero = () => (
  <Section>
    <video muted autoPlay playsInline loop poster="true">
      <source src={space} />
    </video>
  </Section>
);

export default Hero;