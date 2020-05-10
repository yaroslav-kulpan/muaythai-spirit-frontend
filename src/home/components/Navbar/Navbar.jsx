import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-scroll'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Navbar.module.scss'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import CloseIcon from '@material-ui/icons/Close'
import NavbarMobileIcon from './NavbarMobileIcon'
import GroupIcon from '@material-ui/icons/Group'
import makeStyles from '@material-ui/core/styles/makeStyles'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkDecorate from '@material-ui/core/Link'

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#1f232c',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1f232c',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4rem',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  close: {
    color: '#fff',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding: '0 0 0 16px',
    listStyle: 'none',
    color: '#a3aab4',
  },

  icon__wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '7px',
    marginBottom: '1.4rem',
    width: '40px',
    height: '40px',
    border: '2px solid #a3aab4',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  copy: {
    paddingBottom: '10px',
    textAlign: 'center',
    color: '#a3aab4',
    fontSize: '10px',
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Navbar = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = useCallback(() => setOpen(true), [])
  const handleDrawerClose = useCallback(() => setOpen(false), [])
  const handleClickAway = useCallback(() => setOpen(false), [])

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
                <IconButton
                  color="inherit"
                  aria-label="menu open"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box
                style={{ marginLeft: 'auto' }}
                display={{ xs: 'none', sm: 'none', md: 'block' }}
              >
                <Link
                  className={styles.link}
                  activeClass={styles.active}
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Тренера
                </Link>{' '}
                <Link
                  className={styles.link}
                  activeClass={styles.active}
                  to="abonement"
                  spy={true}
                  smooth={true}
                  // offset={-10}
                  duration={500}
                >
                  Абонементы
                </Link>
                <Link
                  className={styles.link}
                  activeClass={styles.active}
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Вопросы
                </Link>
                <Link
                  className={styles.link}
                  activeClass={styles.active}
                  to="about-say"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Отзывы
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <ClickAwayListener
        onClickAway={handleClickAway}
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
      >
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon className={classes.close} />
            </IconButton>
          </div>
          <List>
            <NavbarMobileIcon
              to="team"
              primary="Тренера"
              icon={<GroupIcon />}
              spy={true}
              onClose={handleDrawerClose}
              smooth={true}
              offset={-70}
              duration={500}
            />
            <NavbarMobileIcon
              to="abonement"
              primary="Абонементы"
              icon={<GroupIcon />}
              spy={true}
              onClose={handleDrawerClose}
              smooth={true}
              duration={500}
            />
            <NavbarMobileIcon
              to="faq"
              primary="Вопросы"
              icon={<QuestionAnswerIcon />}
              spy={true}
              onClose={handleDrawerClose}
              smooth={true}
              offset={-65}
              duration={500}
            />
            <NavbarMobileIcon
              to="about-say"
              primary="Отзывы"
              icon={<FormatQuoteIcon />}
              spy={true}
              onClose={handleDrawerClose}
              smooth={true}
              duration={500}
            />
          </List>

          <ul className={classes.social}>
            <li className={classes.icon__wrapper}>
              <YouTubeIcon />
            </li>
            <li className={classes.icon__wrapper}>
              <InstagramIcon />
            </li>
            <li className={classes.icon__wrapper}>
              <FacebookIcon />
            </li>
          </ul>

          <div className={classes.copy}>
            &copy; muaythaispiritgym {new Date().getFullYear()} by{' '}
            <LinkDecorate
              href="/"
              target="_blank"
              rel="noopener"
              color="initial"
            >
              Yaroslav Kulpan
            </LinkDecorate>
          </div>
        </Drawer>
      </ClickAwayListener>
    </>
  )
}

export default Navbar
