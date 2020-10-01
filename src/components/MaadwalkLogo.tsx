import React from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: '200px',
    },
  })
);

const MaadwalkLogo = () => {
  const classes = useStyles();
  return (
    <Card style={{ width: '200px', height: '80px' }}>
      <Link to='/'>
        <img
          className={classes.logo}
          src={require('../static/Logga.png')}
          alt='Italian Trulli'
        ></img>
      </Link>
    </Card>
  );
};

export default MaadwalkLogo;
