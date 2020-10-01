import React from 'react';
import Grid from '@material-ui/core/Grid';

import GameCard from '../components/GameCard';
import useStyles from '../styles/MainViewStyles';

const MainView = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='flex-start'
      className={classes.grid}
    >
      <Grid item>
        <GameCard
          gameTitle={'newTD'}
          gameImage={require('../static/flower.jpeg')}
        />
      </Grid>
      <Grid item container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <GameCard
            gameTitle={'Maadjump'}
            gameImage={require('../static/flower.jpeg')}
          />
        </Grid>
        <Grid item>
          <GameCard
            gameTitle={'Mercenary TD'}
            gameImage={require('../static/flower.jpeg')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainView;
