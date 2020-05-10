import React from 'react'
import FooterDescription from '../FooterDescription'
import classes from './Footer.module.scss'
import { ErrorBoundaries } from '../../../shared/components/ErrorBoundaries'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FooterFormContainer from '../../containers/FooterFormContainer'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <FooterDescription classes={classes} />
          </Grid>
          <Grid item md={6}>
            <ErrorBoundaries>
              <FooterFormContainer />
            </ErrorBoundaries>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          marginTop: '1rem',
          padding: '12px 0',
          backgroundColor: '#232730',
          fontSize: '1rem',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <div style={{ textAlign: 'right' }}>
            &copy; {new Date().getFullYear()} разрабатоно{' '}
            <Link href="/" >Yaroslav Kulpan</Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
