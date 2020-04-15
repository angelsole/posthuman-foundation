
import React from "react"
import styled from "styled-components"
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import space from '../../assets/videos/space_earth.mp4';

const VideoContainer = styled.div`
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
  padding-top: 200px;
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

const Description = styled.p`
  font-size: 1.5rem;
`
const Section = styled.section`
  padding-bottom: 100px;
`

const WhiteButton= styled(props => <Button {...props} />)`
  border-color: white !important;
  color: white !important;
`;


const Hero = () => (
  <>
    <Section>
      <VideoContainer>
        <Video muted autoPlay playsInline loop poster="true">
          <source src={space} />
        </Video>
      </VideoContainer>
      <Container>
        <HeroContent>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Title variant="h1">Únete al futuro</Title>
            <Description>Posthuman foundation persigue y promueve el mejoramiento humano. El desarrollo tecnológico exponencial está haciendo posible el nacimiento de un nuevo hombre. Sé parte del futuro y únete a nosotros para impulsar el conocimiento Posthumano.</Description>
          </Grid>
            <WhiteButton
              size="large"
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
                Saber más
            </WhiteButton>
        </HeroContent>
      </Container>
      <Overlay />
    </Section>
  </>
);

export default Hero;