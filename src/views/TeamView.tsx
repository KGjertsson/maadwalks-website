import React from 'react';
import { Grid, Card, CardMedia, CardHeader } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from '../styles/TeamViewStyles';

const teamMembers = [
  {
    name: 'Alex Lindström',
    image: require('../static/team/alex_small.jpg'),
    title: 'Game Developer',
    linkedinLink: 'https://www.linkedin.com/in/alex-lindstr%C3%B6m-a8245987/',
  },
  {
    name: 'Anton Anderzén',
    image: require('../static/team/anton_small.jpg'),
    title: 'Game Developer',
    linkedinLink: 'https://www.linkedin.com/in/anton-anderz%C3%A9n/',
  },
  {
    name: 'Daniel Karlsson',
    image: require('../static/team/daniel_small.jpg'),
    title: 'Game Developer',
    linkedinLink: 'https://www.linkedin.com/in/daniel-karlsson-00ba1b181/',
  },
  {
    name: 'Markus Winroth',
    image: require('../static/team/markus_small.jpg'),
    title: 'Game Developer',
    linkedinLink: 'https://www.linkedin.com/in/markuswinroth/',
  },
  {
    name: 'Konrad Makhool Gjertsson',
    image: require('../static/team/konrad.jpg'),
    title: 'Web Developer',
    linkedinLink: 'https://www.linkedin.com/in/konrad-gjertsson/',
  },
];

const TeamView = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid
        item
        xs={12}
        sm={10}
        md={10}
        lg={7}
        xl={7}
        style={{ margin: '10px' }}
      >
        We are a bunch of like minded people with a passion for both playing and
        creating games. Maadwalk Games AB is our way of realizing our dreams,
        where we can let our creativity run free and where we can create the
        games we want!
      </Grid>
      <Grid
        container
        item
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.grid}
        xs={12}
        sm={10}
        md={10}
        lg={8}
        xl={8}
      >
        {teamMembers.map((teamInfo) => {
          return (
            <Grid item key={teamInfo.name}>
              <Card style={{ margin: '5px', borderRadius: '0px' }}>
                <CardHeader
                  title={teamInfo.name}
                  action={
                    <a
                      className={classes.hyperlink}
                      href={teamInfo.linkedinLink}
                    >
                      <LinkedInIcon className={classes.linkedin} />
                    </a>
                  }
                />
                <CardMedia
                  style={{ height: '267px', width: '300px' }}
                  image={teamInfo.image}
                />
                {teamInfo.title}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TeamView;
