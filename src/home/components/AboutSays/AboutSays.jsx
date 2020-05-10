import React, { useEffect, useState } from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './AboutSays.scss';
import AboutSaysItem from '../AboutSaysItem';
import { feedbackArr } from './feedback-arr';
import HeaderBackground from '../Header/HeaderBackground'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const AboutSays = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(feedbackArr);
  }, []);

  return (
    <HeaderBackground id="about-say" tag="section" className="feedback" >
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className="feedback-title">
       Что о нас говорят
      </Typography>
      <Container maxWidth="lg">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          playDirection="forward"
          isPlaying
          interval={4000}
          dragEnabled
          infinite
          touchEnabled
          // className="height"
          totalSlides={4}>
          <Slider>
            {data &&
              data.map((item, index) => (
                <AboutSaysItem about={item} index={index} key={item.id} />
              ))}
          </Slider>
          <Typography component="div" align="center">
            <DotGroup />
            <ButtonBack className="button__control button__prev">
              <ArrowBackIosIcon />
            </ButtonBack>
            <ButtonNext className="button__control button__next">
              <ArrowForwardIosIcon />
            </ButtonNext>
          </Typography>
        </CarouselProvider>
      </Container>
    </HeaderBackground>
  );
};

export default AboutSays;
