import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const FooterDescription = ({ classes }) => {
  return (
    <>
      <h2 className={classes.title}>Наши Контакты</h2>
      <Typography>
        Зал Muay Thai Spirit Gym ждет всех желающих заниматься тайским боксом в
        Киеве с 6 лет. Также проводятся индивидуальные тренировки. Зал Muay Thai
        Spirit Gym ждет всех желающих заниматься тайским боксом в Киеве с 6 лет.
        Также проводятся индивидуальные тренировки.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon style={{ color: '#a3aab4' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="ул. Эреванская 31/1, Киев, 03087, Украина" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: '#a3aab4' }}>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="LozenkoVo@gmail.com" />
        </ListItem>
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
    </>
  );
};

export default FooterDescription;
