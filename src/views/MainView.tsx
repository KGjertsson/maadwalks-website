import React from 'react';
import { Grid } from '@material-ui/core';

import GameCard from '../components/GameCard';
import useStyles from '../styles/MainViewStyles';

const largeCardxs = 12;
const largeCardsm = 8;
const largeCardmd = 8;
const largeCardlg = 6;
const largeCardxl = 6;

const smallCardxs = 12;
const smallCardsm = 4;
const smallCardmd = 4;
const smallCardlg = 3;
const smallCardxl = 3;

const MainView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid
          container
          item
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid
            item
            xs={largeCardxs}
            sm={largeCardsm}
            md={largeCardmd}
            lg={largeCardlg}
            xl={largeCardxl}
          >
            <GameCard
              gameTitle={'Mercenary Arena'}
              gameImage={require('../static/games/legion_arena.png')}
              gameLink={
                'https://play.google.com/store/apps/details?id=com.maadwalk.OurLastHope'
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}
        >
          <Grid
            item
            xs={smallCardxs}
            sm={smallCardsm}
            md={smallCardmd}
            lg={smallCardlg}
            xl={smallCardxl}
          >
            <GameCard
              gameTitle={'Mad Jump'}
              gameImage={require('../static/games/maadjump.png')}
              gameLink={
                'https://play.google.com/store/apps/details?id=com.maadwalk.maadjump'
              }
            />
          </Grid>
          <Grid
            item
            xs={smallCardxs}
            sm={smallCardsm}
            md={smallCardmd}
            lg={smallCardlg}
            xl={smallCardxl}
          >
            <GameCard
              gameTitle={'Mercenary TD'}
              gameImage={require('../static/games/mercenary_td.webp')}
              gameLink={
                'https://play.google.com/store/apps/details?id=com.MAADWALK.Mercenary'
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainView;
