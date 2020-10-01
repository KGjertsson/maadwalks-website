import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import RedditIcon from '@material-ui/icons/Reddit';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import useStyles from '../styles/ContactIconStyles';

const ContactIcons = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <Grid item>
          <RedditIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <MailIcon className={classes.icon} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactIcons;
