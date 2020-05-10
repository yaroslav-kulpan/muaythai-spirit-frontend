import React, { useCallback } from 'react'
import classes from './FAQ.module.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const Faq = () => {
  const [expanded, setExpanded] = React.useState('panel-0')

  const handleChange = useCallback(
    panel => (event, isExpanded) => setExpanded(isExpanded ? panel : false),
    []
  )

  return (
    <section className={classes.faq}>
      <Container maxWidth="lg" id="faq">
        <Typography
          variant="h4"
          component="h4"
          align="center"
          className={classes.title}
        >
          Ответы на вопросы
        </Typography>
        <ExpansionPanel
          style={{ margin: '0.8rem 0 0.8rem' }}
          expanded={expanded === `panel-${0}`}
          onChange={handleChange(`panel-${0}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-faq-content`}
            id={`panel-faq-header`}
          >
            <Typography component="h4" variant="h6">
              Безопасны ли тренировки по Тайскому боксу?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              В нашем зале имеется вся необходимая экипировка для занятий
              Тайским Боксом. Основная цель тренировок улучшить физическую форму
              спортсменов и научить технике тайского бокса. Участие в спаррингах
              и соревнованиях не обязательное. Все тренировки проходят под
              чутким руководством тренеров, что максимально снижает вероятность
              травмироваться.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          style={{ margin: '0.8rem 0 0.8rem' }}
          expanded={expanded === `panel-${1}`}
          onChange={handleChange(`panel-${1}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-faq-content`}
            id={`panel-faq-header`}
          >
            <Typography component="h4" variant="h6">
              Есть ли тренировки для детей?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Да. В нашем зале можно заниматься с 6 лет и уже с молоду начинать
              обучаться мастерству тайского бокса
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          style={{ margin: '0.8rem 0 0.8rem' }}
          expanded={expanded === `panel-${2}`}
          onChange={handleChange(`panel-${2}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-faq-content`}
            id={`panel-faq-header`}
          >
            <Typography component="h4" variant="h6">
              Что надо иметь с собой для тренировок?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              С собой на тренировку необходимо иметь шорты и футболку. Девушки
              часто занимаются в лосинах и шортах. Также с собой нужно взять
              тапки и полотенце, после тренировки есть возможность принять душ.
              Перчатки для тренировок вы сможете взять в зале. По желанию, вы
              сможете прям в зале приобрести новые перчатки для тренировок.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          style={{ margin: '0.8rem 0 0.8rem' }}
          expanded={expanded === `panel-${3}`}
          onChange={handleChange(`panel-${3}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-faq-content`}
            id={`panel-faq-header`}
          >
            <Typography component="h4" variant="h6">
              Есть ли пробные занятия?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Да, вы можете прийти на тренировку и понять подходит ли этот спорт
              для вас. Пробное занятие бесплатное, просто напишите или позвоните
              нам и мы будем ждать вас на тренировке)
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </section>
  )
}

export default Faq
