import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import ContactsModalFormContainer from '../../containers/ContactsModalFormContainer'
import { ErrorBoundaries } from '../../../shared/components/ErrorBoundaries'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  h1: {
    marginBottom: '0.7rem',
  },
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

export default function ContactsModal({
  buttonText,
  className,
  color,
  variant,
  initialValues,
}) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = React.useCallback(() => setOpen(true), [])
  const handleClose = React.useCallback(() => setOpen(false), [])

  return (
    <>
      <Button
        variant={variant}
        color={color}
        className={className}
        onClick={handleClickOpen}
        size="medium"
      >
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        aria-labelledby="contacts-dialog-title"
      >
        <DialogTitle
          id="contacts-dialog-title"
          onClose={handleClose}
          style={{ marginBottom: '1rem' }}
        >
          {' '}
        </DialogTitle>
        <DialogContent>
          <ErrorBoundaries>
            <ContactsModalFormContainer
              handleClose={handleClose}
              initialValues={initialValues}
            />
          </ErrorBoundaries>
        </DialogContent>
      </Dialog>
    </>
  )
}
