import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

export const ErrorsIndicators = () => {
  return (
    <>
      <ErrorOutlineIcon />
      <Typography align="center" component="h3" variant="h3">
        Что-то пошло не так !
      </Typography>
    </>
  )
}
