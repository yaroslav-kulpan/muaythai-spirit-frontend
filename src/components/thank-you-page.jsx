import React, { useCallback } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import IconButton from '@material-ui/core/IconButton'
import { clearThankYouMessage } from '../contacts-modal/actions/contacts.action'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    padding: '20px',
  },
  icon: {
    fontSize: '5rem',
    color: 'green',
  },
  description: {
    marginTop: '1rem',
    width: '24rem',
  },
  social__wrapper: {
    marginTop: '1rem',
  },
}))

const ThankYouPage = () => {
  const classes = useStyles()
  const { message } = useSelector(({ form: { message } }) => ({ message }))
  const dispatch = useDispatch()
  const handleClose = useCallback(() => dispatch(clearThankYouMessage()), [
    dispatch,
  ])

  if (message) {
    setTimeout(() => handleClose(), 4000)
  }

  if (!message) {
    return null
  }

  return (
    <>
      {!!message && (
        <Backdrop
          className={classes.backdrop}
          open={!!message}
          onClick={handleClose}
        >
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center">
              <DoneAllIcon className={classes.icon} />
            </Typography>
            <Typography component="h4" variant="h4" align="center">
              Спасибо!
            </Typography>
            <Typography align="center" className={classes.description}>
              Ваше сообщение отправлено, мы с вами свяжемся в ближайшее время!
            </Typography>
            <Typography align="center" className={classes.social__wrapper}>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Typography>
          </Paper>
        </Backdrop>
      )}
    </>
  )
}

export default ThankYouPage
