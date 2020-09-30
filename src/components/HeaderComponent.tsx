import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import RedditIcon from '@material-ui/icons/Reddit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      width: '200px',
    },
    menu: {
      position: 'absolute',
      right: 0,
    },
    navigationButton: {
      marginLeft: 16,
      marginRight: 16,
    },
  })
);

export default function ButtonAppBar() {
  const teamViewName = 'TEAM';
  const contactViewName = 'CONTACT';
  const dataPolicyViewName = 'DATA POLICY';

  const buttonData: Array<[string, string]> = [
    ['TEAM', '/team'],
    ['CONTACT', '/contact'],
    ['DATA POLICY', '/data-policy'],
  ];

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MaadwalkLogo = () => (
    <Link to='/'>
      <img
        className={classes.logo}
        src={require('../static/Logga.png')}
        alt='Italian Trulli'
      ></img>
    </Link>
  );

  const ButtonGroup = () => (
    <Grid
      item
      container
      spacing={3}
      direction='row'
      justify='center'
      alignItems='center'
      style={{ minWidth: '100vh' }}
    >
      <Grid item spacing={3}>
        {buttonData.map(([buttonText, buttonLink]: [string, string]) => (
          <Button
            disableElevation
            className={classes.navigationButton}
            variant='contained'
            component={Link}
            to={buttonLink}
          >
            {buttonText}
          </Button>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        {/* <Toolbar> */}
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          style={{ height: '80px' }}
        >
          <Grid item>
            <MaadwalkLogo />
          </Grid>
          <Grid item>
            <ButtonGroup></ButtonGroup>
          </Grid>
          <Grid item>
            <RedditIcon style={{ margin: '10px' }}></RedditIcon>
          </Grid>
          {/* <div className={classes.menu}>
              <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
              >
                Open Menu
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{teamViewName}</MenuItem>
                <MenuItem onClick={handleClose}>{contactViewName}</MenuItem>
                <MenuItem onClick={handleClose}>{dataPolicyViewName}</MenuItem>
              </Menu>
            </div> */}
        </Grid>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}
