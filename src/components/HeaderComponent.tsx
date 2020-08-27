import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      width: '200px',
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <img
            className={classes.logo}
            src={require('../static/Logga.png')}
            alt='Italian Trulli'
          ></img>
          <Button variant='contained' component={Link} to='/contact'>
            ContactView
          </Button>
          <Button variant='contained' component={Link} to='/data-policy'>
            DataPolicyView
          </Button>
          <Button variant='contained' component={Link} to='/'>
            MainView
          </Button>
          <Button variant='contained' component={Link} to='/team'>
            TeamView
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
