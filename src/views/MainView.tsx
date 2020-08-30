import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    card: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'black',
      backgroundColor: 'white',
    },
    media: {
      height: '340px',
    },
    hyperlink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },
  })
);

export default function MainView() {
  const classes = useStyles();

  const GameCard = (): JSX.Element => {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component='img'
            alt='Contemplative Reptile'
            image={require('../static/games/legions.webp')}
            title='Contemplative Reptile'
          ></CardMedia>
          <CardActions className={classes.overlay}>
            <a
              className={classes.hyperlink}
              href='https://play.google.com/store/apps/details?id=com.maadwalk.maadjump'
            >
              <Button size='small' color='primary'>
                Play
              </Button>
            </a>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
        style={{ minHeight: 'calc(100vh - 95px)' }}
      >
        <Grid item xs={12} sm={10} spacing={3} alignItems='center'>
          <GameCard />
        </Grid>
        <Grid item xs={12} sm={5} spacing={3} alignItems='center'>
          <GameCard />
        </Grid>
        <Grid item xs={12} sm={5} spacing={3} alignItems='center'>
          <GameCard />
        </Grid>
      </Grid>
    </div>
  );
}
