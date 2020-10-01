import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import RedditIcon from '@material-ui/icons/Reddit';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const ContactIcons = () => {
  return (
    <Card style={{ width: '200px', height: '80px' }}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ height: '80px' }}
      >
        <Grid item>
          <RedditIcon style={{ padding: '2px' }} />
        </Grid>
        <Grid item>
          <MailIcon style={{ padding: '2px' }} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactIcons;
