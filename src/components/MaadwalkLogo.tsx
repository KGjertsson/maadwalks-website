import React from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

import useStyles from '../styles/MaadwalkLogoStyles';

const MaadwalkLogo = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to='/'>
        <img
          className={classes.img}
          src={require('../static/Logga.png')}
          alt='Italian Trulli'
        ></img>
      </Link>
    </Card>
  );
};

export default MaadwalkLogo;
