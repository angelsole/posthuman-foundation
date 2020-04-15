
import React from "react"
import styled from "styled-components"
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import techBrain from '../../assets/images/tech_brain.svg';

const Section = styled.section`
  background: ${({ theme: { colors } }) => `${colors.primaryBlue}`};
  padding-bottom: 500px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const StyledContainer= styled(props => <Container {...props} />)`
  padding-top: 8%;
  padding-right: 30px;
  padding-bottom: 8%;
  padding-left: 30px;
`;

const Subtitle= styled(props => <Typography {...props} />)`
  font-family: 'SpaceRanger' !important;
  font-size: 3rem !important;
`;

const ImageContainer = styled.div`
  width: 80%;
`


const MainObjectives = () => (
  <>
    <Section>
      <StyledContainer>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <ImageContainer width="80%" align="center">
              <Image alt="Hombre mirando el cielo nocturno" src={techBrain}></Image>
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Subtitle variant="h3">¿Qué es Posthuman Foundation?</Subtitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In mollis a diam at iaculis. In lectus eros, ornare et congue a, vestibulum eu sem.
              Vestibulum vitae erat libero. Mauris sit amet vulputate est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Pellentesque luctus maximus mauris at placerat.</p>
              <p>Aliquam varius facilisis dolor, mollis convallis erat condimentum ac. Vivamus pellentesque ex a maximus convallis.
              Ut scelerisque metus porttitor, aliquet turpis non, tincidunt neque. Aenean suscipit, ex in luctus finibus, tortor tellus posuere enim, ut ornare quam enim vel massa.
              Sed facilisis odio est, et ultricies turpis pharetra a. Morbi a laoreet eros, vel vestibulum sapien. Ut a massa pretium, eleifend ligula vel, pulvinar ipsum.
              Mauris interdum est nec mi blandit, in consequat ipsum tempor. Mauris interdum nec sapien nec suscipit. Praesent sit amet tellus nec nunc dictum pretium non et nisi.</p>
          </Grid>
        </Grid>
      </StyledContainer>
    </Section>
  </>
);

export default MainObjectives;