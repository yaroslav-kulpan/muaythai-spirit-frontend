import React from 'react';
import classes from './Advantages.module.scss';
import cards from './advantages.card';
import AdvantagesItem from '../AdvantagesItem';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Advantages = () => {
  return (
    <section className={classes.advantages}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          component="h2"
          align="center"
          className={classes.title}>
          ДЛЯ КОГО ПОДОЙДЕТ?
        </Typography>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <AdvantagesItem card={card} key={card.title} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Advantages;
