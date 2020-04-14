
import React from "react"
import styled from "styled-components"
import { Grid, Container, Typography } from '@material-ui/core';

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

const HeroContent = styled.div`
  padding-top: 250px;
  @media (max-width: 960px) {
    padding-top: 100px;
  }
`

const Overlay = styled.div`
  background: #00000047;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`

const Title= styled(props => <Typography {...props} />)`
  font-size: 4rem !important;
`;

const Hero = () => (
  <>
    <Section>
      <Video muted autoPlay playsInline loop poster="true">
        <source src={space} />
      </Video>
    </Section>
    <Container>
      <HeroContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={6}
        >
          <Grid direction='column' xs={12} md={6}>
            <Title variant="h1">Impulsamos el futuro</Title>
            <p>Posthuman foundation es una asociación que persigue el mejoramiento de la salud y las capacidades humanas hasta lograr lo que se denomina post-humanos, seres tan distintos a los humanos actuales que ya pueden considerarse otra especie.</p>
          </Grid>
          <Grid direction='column' xs={12} md={4}>
            <p>Posthuman foundation es una asociación que persigue el mejoramiento de la salud y las capacidades humanas hasta lograr lo que se denomina post-humanos, seres tan distintos a los humanos actuales que ya pueden considerarse otra especie.</p>
          </Grid>
        </Grid>
      </HeroContent>
    </Container>
    <Overlay />
  </>
);

export default Hero;