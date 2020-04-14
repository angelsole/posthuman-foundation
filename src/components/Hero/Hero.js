
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
  overflow: hidden;
`

const Video = styled.video`
@media (max-width: 960px) {
  position: absolute;
  top: 0;
  left: -50%;
}
`

const Hero = () => (
  <Section>
    <Video muted autoPlay playsInline loop poster="true">
      <source src={space} />
    </Video>
  </Section>
);

export default Hero;