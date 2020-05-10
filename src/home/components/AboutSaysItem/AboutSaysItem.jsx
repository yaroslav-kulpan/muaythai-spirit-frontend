import React from 'react'
import { Slide } from 'pure-react-carousel'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'

const AboutSaysItem = ({
  about: { image, avatarTitle, avatarDescription, description },
  index,
}) => {
  return (
    <Slide index={index} className="height">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="carousel-caption"
      >
        <Typography component="div" className="avatar-caption">
          <Typography className="avatar-title" align="center">
            {avatarTitle}
          </Typography>
          <Typography align="center" className="avatar-subtitle">
            {avatarDescription}
          </Typography>
        </Typography>
        <div className="avatar-img-mini rounded-circle">{image}</div>
        <Typography
          component="div"
          className="feedback-description"
          align="center"
        >
          <Typography align="center">
            <IconButton>
              <FormatQuoteIcon
                style={{ color: 'rgba(0, 203, 246, 0.23)', fontSize: '3rem' }}
              />
            </IconButton>
          </Typography>
          {description}
        </Typography>
      </Box>
    </Slide>
  )
}

export default AboutSaysItem
