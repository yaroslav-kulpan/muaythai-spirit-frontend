import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, Fab } from '@material-ui/core'
import Navbar from '../home/components/Navbar'
import Footer from '../home/components/Footer'
import ScrollToTop from '../shared/components/ScrollToTop'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  top: {
    backgroundColor: '#dfa700',
    '&:hover': {
      backgroundColor: '#cc9a06',
    },
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />

      <Navbar />
      <main style={{ overflowX: 'hidden' }}>{children}</main>
      <Footer />
      <ScrollToTop>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          className={classes.top}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
