import React, { forwardRef, useCallback, useMemo } from 'react'
import { Link } from 'react-scroll'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles({
  listItem: {
    position: 'relative',
    textAlign: 'center',
    color: '#a3aab4',
  },
  link: {
    '& .MuiListItemText-primary': {
      transition: '0.7s',
      fontSize: '1.3rem',
      position: 'relative',

      '&::after': {
        content: "''",
        position: 'absolute',
        right: '-16px',
        bottom: '-9px',
        height: 0,
        width: 0,
        borderRight: '4px solid #fedb72',
        transition: '0.4s',
      },
      '&:hover': {
        color: '#fedb72',

        '&::after': {
          height: '49px',
        },
      },
    },
  },
  active: {
    '& .MuiListItemText-primary': {
      position: 'relative',
      color: '#fedb72',
      '&::after': {
        content: "''",
        position: 'absolute',
        right: '-16px',
        bottom: '-9px',
        height: '49px',
        width: 0,
        borderRight: '4px solid #fedb72',
        transition: '0.4s',
      },
    },
  },
  root: {
    '& .MuiSvgIcon-root': {
      color: '#a3aab4',
    },
  },
})

const NavbarMobileIcon = ({
  primary,
  to,
  spy,
  smooth,
  offset,
  duration,
  onClose,
}) => {
  const classes = useStyles()
  const handleClose = useCallback(() => onClose(), [onClose])
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <Link
          to={to}
          ref={ref}
          spy={spy}
          smooth={smooth}
          offset={offset}
          duration={duration}
          className={classes.link}
          activeClass={classes.active}
          {...itemProps}
        />
      )),
    [to, spy, smooth, offset, duration, classes.link, classes.active]
  )

  return (
    <ListItem
      button
      component={renderLink}
      className={classes.listItem}
      onClick={handleClose}
    >
      <ListItemText className={classes.link} primary={primary} />
    </ListItem>
  )
}

export default NavbarMobileIcon
