import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const AdvantagesItem = ({ card: { title, description, image } }) => {
  return (
    <Grid item md={4}>
      <Card>
        <CardContent>
          <img src={image} alt={title} style={{ width: '100%' }} />
          <Typography variant="h5" component="h5" align="center">
            {title}
          </Typography>
          <Typography align="center">{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AdvantagesItem;
