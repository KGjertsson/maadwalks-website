import React from 'react';
import { AppBar, Grid, Hidden } from '@material-ui/core';

import NavigationButtons from './NavigationButtons';
import ContactIcons from './ContatIcons';
import MaadwalkLogo from './MaadwalkLogo';
import MobileMenu from './MobileMenu';
import useStyles from '../styles/HeaderStyles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        className={classes.grid}
      >
        <Grid item>
          <MaadwalkLogo />
        </Grid>
        <Hidden xsDown>
          <Grid item>
            <NavigationButtons />
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item>
            <ContactIcons />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item>
            <MobileMenu />
          </Grid>
        </Hidden>
      </Grid>
    </AppBar>
  );
};

export default Header;
