import React from 'react';
import { Card, CardActions, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from '../styles/NavigationButtons';

const buttonData: Array<[string, string]> = [
  ['TEAM', '/team'],
  ['DATA POLICY', '/data-policy'],
];

const NavigationButtons = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions className={classes.cardActions}>
        <Grid
          container
          spacing={3}
          direction='row'
          justify='space-around'
          alignItems='center'
          className={classes.grid}
        >
          {buttonData.map(([buttonText, buttonLink]: [string, string]) => (
            <Grid item key={buttonText}>
              <Button
                disableElevation
                className={classes.navigationButton}
                variant='contained'
                component={Link}
                to={buttonLink}
                key={buttonText}
              >
                {buttonText}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardActions>
    </Card>
  );
};

export default NavigationButtons;
