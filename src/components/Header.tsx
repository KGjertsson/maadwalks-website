import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import NavigationButtons from './NavigationButtons';
import ContactIcons from './ContatIcons';
import MaadwalkLogo from './MaadwalkLogo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menu: {
      position: 'absolute',
      right: 0,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          style={{ height: '80px' }}
        >
          <Grid item>
            <MaadwalkLogo />
          </Grid>
          <Grid item>
            <NavigationButtons />
          </Grid>
          <Grid item>
            <ContactIcons />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
