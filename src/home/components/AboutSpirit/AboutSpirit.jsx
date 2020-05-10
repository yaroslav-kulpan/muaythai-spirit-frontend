import React from 'react'
import './AboutSpirit.scss'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import CloudIcon from '@material-ui/icons/Cloud'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import StarIcon from '@material-ui/icons/Star'
import AboutSpiritImage from './AboutSpiritImage'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  },
  rootFirst: {
    marginTop: '1rem',
  },
  avatar: {
    backgroundColor: 'rgb(35, 39, 48)',
  },
  listItem: {
    '& > *': {
      fontSize: '1.2rem',
    },
  },
  title: {
    marginBottom: '2rem',
  },
}))

const AboutSpirit = () => {
  const classes = useStyles()
  return (
    <section className="about-spirit-gym">
      <Container maxWidth="lg">
        <Typography
          component="h5"
          variant="h5"
          align="center"
          className={classes.title}
        >
          Про Muay Thai Spirit Gym
        </Typography>
        <Grid container>
          <Grid item md={6}>
            <div className="d-flex justify-content-between flex-column about-spirit-container">
              <Typography className="about-spirit-gym-description">
                Зал Muay Thai Spirit Gym был основан в 2015 году. В нашем зале
                работает 5 высококвалифицированных тренеров, обладающих
                чемпионскими званиями, регулярно тренирующихся в Тайланде и
                участвующих в международных соревнованиях.
              </Typography>
              <Typography className="about-spirit-gym-description">
                У нас вы можете научится тайскому боксу и повысить уровень
                физической формы и здоровья. Зал состоит из 2ух полностью
                оборудованных секций для тренировок. Зал со снарядами и зал для
                тренировок. Регулярно для всех желающих проводятся спарринги,
                для того, чтобы применять выученное на практике.
              </Typography>
              <Typography className="about-spirit-gym-description">
                В зале имеется вся необходимая экипировка для занятий.
              </Typography>
                <AboutSpiritImage
                  className="img"
                  title="Про Muay Thai Spirit Gym"
                  alt="Про Muay Thai Spirit Gym"
                />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="about-spirit-container">
              <List>
                <ListItem className={classes.rootFirst}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <StarIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Опытные и квалифицированные тренера"
                    className={classes.listItem}
                  />
                </ListItem>
                <ListItem className={classes.root}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <TrendingUpIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Целевые тренировки на результат"
                    className={classes.listItem}
                  />
                </ListItem>
                <ListItem className={classes.root}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <FitnessCenterIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Тренировки для детей и взрослых"
                    className={classes.listItem}
                  />
                </ListItem>
                <ListItem className={classes.root}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <SupervisorAccountIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Индивидуальные программы для каждого"
                    className={classes.listItem}
                  />
                </ListItem>
                <ListItem className={classes.root}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <CloudIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Дух и атмосфера Тайланда"
                    className={classes.listItem}
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutSpirit
