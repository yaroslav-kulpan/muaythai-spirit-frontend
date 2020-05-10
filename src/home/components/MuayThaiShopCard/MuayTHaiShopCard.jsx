import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import './MuayThaiShopCard.scss'

const useStyles = makeStyles({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  card: {
    width: '260px',
  },
})

const MuayTHaiShopCard = ({ card: { title, image, price } }) => {
  const classes = useStyles()
  const Price = new Intl.NumberFormat('uk', {
    style: 'currency',
    currency: 'UAH',
  }).format(price)

  return (
    <Typography component="div" className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardActionArea>
          {image}
          <CardContent>
            <Typography component="h6" variant="h6" align="center">
              {title}
            </Typography>
            <Typography align="center">{Price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Typography>
  )
}

export default MuayTHaiShopCard
