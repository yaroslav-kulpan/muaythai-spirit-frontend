import React from 'react'
import { v4 } from 'uuid'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import SlavaImg from './graphql/SlavaImg'
import MezencevImg from './graphql/MezencevImg'
import KalinaImg from './graphql/KalinaImg'
import KraminskiyImg from './graphql/Kraminskiy'
import VladaImg from './graphql/VladaImg'
import RenderList from './RenderList'
import styles from './AboutTeam.module.scss'

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    padding: '0 !important',
  },
}))

const AboutTeam = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <section className={styles.team} id="team">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          className={styles.title}
        >
          Тренера
        </Typography>
        <Grid container spacing={3} className={styles.root}>
          {/* 1 */}
          <Grid item md={4} sm={6} className={styles.primary__2}>
            <Card>
              <CardActionArea>
                <MezencevImg
                  className={styles.image}
                  alt="Мезенцев"
                  title="Андрей Мезенцев"
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5" align="center">
                  Андрей Мезенцев
                </Typography>
                <Typography component="h6" variant="h6" align="center">
                  Тренер
                </Typography>
                <CardActions disableSpacing>
                  <ExpansionPanel
                    className={styles.panel__team}
                    expanded={expanded.toString() === `panel-${0}`}
                    onChange={handleChange(`panel-${0}`)}
                  >
                    <ExpansionPanelSummary
                      className={classes.root}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`content-${0}`}
                      id={`panel1bh-${0}`}
                    >
                      <Typography>
                        <Link href="/" target="_blank" rel="noopener">
                          <IconButton aria-label="Facebook">
                            <FacebookIcon />
                          </IconButton>
                        </Link>
                        <IconButton aria-label="Instagram">
                          <InstagramIcon />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <RenderList
                          list={[
                            {
                              id: v4(),
                              item: 'Чемпион мира по wmf',
                            },
                            {
                              id: v4(),
                              item: 'Призёр мира по ifma',
                            },
                            {
                              id: v4(),
                              item:
                                'Чемпион и призёр всеукраинских турниров по Муай Тай',
                            },
                            {
                              id: v4(),
                              item: 'Чемпион Украины по к1',
                            },
                            {
                              id: v4(),
                              item:
                                'Обладатель пояса King of ring Киевской Федерации Муай Тай',
                            },
                          ]}
                        />
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          {/* 2 */}
          <Grid item md={4} sm={6} className={styles.primary__1}>
            <Card>
              <CardActionArea>
                <SlavaImg
                  alt="Вечеслав Лозенко"
                  title="Вечеслав Лозенко"
                  className={styles.image}
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5" align="center">
                  Вечеслав Лозенко
                </Typography>
                <Typography component="h6" variant="h6" align="center">
                  Главный Тренер
                </Typography>
                <CardActions disableSpacing>
                  <ExpansionPanel
                    className={styles.panel__team}
                    expanded={expanded.toString() === `panel-${1}`}
                    onChange={handleChange(`panel-${1}`)}
                  >
                    <ExpansionPanelSummary
                      className={classes.root}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`content-${1}`}
                      id={`panel1bh-${1}`}
                    >
                      <Typography>
                        <IconButton aria-label="Facebook">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                          <InstagramIcon />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <RenderList
                          list={[
                            {
                              id: v4(),
                              item: 'Воспитал более 6 чемпионов Украины и Мира',
                            },
                            {
                              id: v4(),
                              item:
                                'Более 10 лет опыта преподавания тайландского бокса',
                            },
                            {
                              id: v4(),
                              item:
                                'Ежегодно тренирует и повышает ' +
                                'квалификацию в клубах Тайланда',
                            },
                            {
                              id: v4(),
                              item:
                                'Выступает с международными семинарами в Европе.',
                            },
                          ]}
                        />
                        />
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          {/* 3 */}
          <Grid item md={4} sm={6} className={styles.primary__3}>
            <Card>
              <CardActionArea>
                <KalinaImg
                  className={styles.image}
                  alt="Антон Калитвинцев"
                  title="Антон Калитвинцев"
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5" align="center">
                  Антон Калитвинцев
                </Typography>
                <Typography component="h6" variant="h6" align="center">
                  Тренер
                </Typography>
                <CardActions disableSpacing>
                  <ExpansionPanel
                    className={styles.panel__team}
                    expanded={expanded.toString() === `panel-${2}`}
                    onChange={handleChange(`panel-${2}`)}
                  >
                    <ExpansionPanelSummary
                      className={classes.root}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`content-${2}`}
                      id={`panel1bh-${2}`}
                    >
                      <Typography>
                        <IconButton aria-label="Facebook">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                          <InstagramIcon />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <RenderList
                          list={[
                            {
                              id: v4(),
                              item:
                                'Призёр всеукраинских турниров по Муай Тай и к1',
                            },
                            {
                              id: v4(),
                              item:
                                'Чемпион и призёр международных турниров по Муай Тай и к1',
                            },
                            {
                              id: v4(),
                              item: 'Самый быстрый нокаут 30 секунд.',
                            },
                          ]}
                        />
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          {/* 4 */}
          <Grid item md={4} sm={6} className={styles.primary__4}>
            <Card>
              <CardActionArea>
                <KraminskiyImg
                  className={styles.image}
                  alt="Евгений Краминский"
                  title="Евгений Краминский"
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5" align="center">
                  Евгений Краминский
                </Typography>
                <Typography component="h6" variant="h6" align="center">
                  Тренер
                </Typography>
                <CardActions disableSpacing>
                  <ExpansionPanel
                    className={styles.panel__team}
                    expanded={expanded.toString() === `panel-${3}`}
                    onChange={handleChange(`panel-${3}`)}
                  >
                    <ExpansionPanelSummary
                      className={classes.root}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`content-${3}`}
                      id={`panel1bh-${3}`}
                    >
                      <Typography>
                        <IconButton aria-label="Facebook">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                          <InstagramIcon />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <RenderList
                          list={[
                            {
                              id: v4(),
                              item: 'Мастер спорта по кикбоксингу',
                            },
                            {
                              id: v4(),
                              item: 'Чемпион мира по К1 2016',
                            },
                            {
                              id: v4(),
                              item: 'Призёр чемпионата мира по к1 2018',
                            },
                            {
                              id: v4(),
                              item:
                                'Многократный чемпион Всеукратнских турниров по к1 и Муай Тай',
                            },
                          ]}
                        />
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          {/* 5 */}
          <Grid item md={4} sm={6} className={styles.primary__5}>
            <Card>
              <CardActionArea>
                <VladaImg
                  className={styles.image}
                  alt="Влада Кухаренко"
                  title="Влада Кухаренко"
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5" align="center">
                  Влада Кухаренко
                </Typography>
                <Typography component="h6" variant="h6" align="center">
                  Тренер
                </Typography>
                <CardActions disableSpacing>
                  <ExpansionPanel
                    className={styles.panel__team}
                    expanded={expanded.toString() === `panel-${4}`}
                    onChange={handleChange(`panel-${4}`)}
                  >
                    <ExpansionPanelSummary
                      className={classes.root}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`content-${4}`}
                      id={`panel1bh-${4}`}
                    >
                      <Typography>
                        <IconButton aria-label="Facebook">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                          <InstagramIcon />
                        </IconButton>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography component="div">
                        <RenderList
                          list={[
                            {
                              id: v4(),
                              item:
                                'Призёр всеукраинских турниров по Muay Thai и К1.',
                            },
                            {
                              id: v4(),
                              item:
                                'Чемпионка и призёр международных турниров по Muay Thai и K1',
                            },
                          ]}
                        />
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutTeam
