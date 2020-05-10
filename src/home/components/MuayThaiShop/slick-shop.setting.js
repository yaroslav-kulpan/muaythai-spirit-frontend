import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { IconButton } from '@material-ui/core'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        right: '-22px',
        zIndex: 100,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '-18px',
        zIndex: 100,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  )
}

export const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  swipeToSlide: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
