import React from 'react';
import { Grid, Card, CardMedia, CardHeader } from '@material-ui/core';

import useStyles from '../styles/TeamViewStyles';

const teamMembers = [
  {
    name: 'Alex Lindström',
    image: require('../static/team/alex_small.jpg'),
    title: 'Game Developer',
  },
  {
    name: 'Anton Anderzén',
    image: require('../static/team/anton_small.jpg'),
    title: 'Game Developer',
  },
  {
    name: 'Daniel Karlsson',
    image: require('../static/team/daniel_small.jpg'),
    title: 'Game Developer',
  },
  {
    name: 'Markus Winroth',
    image: require('../static/team/markus_small.jpg'),
    title: 'Game Developer',
  },
  {
    name: 'Konrad Makhool Gjertsson',
    image: require('../static/team/konrad.jpg'),
    title: 'Web Developer',
  },
];

const TeamView = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.grid}
    >
      {teamMembers.map((teamInfo) => {
        return (
          <Grid item key={teamInfo.name}>
            <Card>
              <CardHeader title={teamInfo.name} />
              <CardMedia
                style={{ height: '267px', width: '400px' }}
                image={teamInfo.image}
              />
              {teamInfo.name}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TeamView;
