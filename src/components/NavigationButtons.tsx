import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigationButton: {
      marginLeft: 16,
      marginRight: 16,
    },
  })
);

const NavigationButtons = () => {
  const classes = useStyles();
  const buttonData: Array<[string, string]> = [
    ['TEAM', '/team'],
    ['DATA POLICY', '/data-policy'],
  ];

  return (
    <Card style={{ width: '400px', height: '80px' }}>
      <CardActions style={{ height: '80px', padding: '0px' }}>
        <Grid
          container
          spacing={3}
          direction='row'
          justify='space-around'
          alignItems='center'
          style={{ padding: '0px' }}
        >
          {buttonData.map(([buttonText, buttonLink]: [string, string]) => (
            <Grid item>
              <Button
                disableElevation
                className={classes.navigationButton}
                variant='contained'
                component={Link}
                to={buttonLink}
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
