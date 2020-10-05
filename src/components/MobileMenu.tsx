import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../styles/MobileMenuStyles';

const menuButtons = [
  ['TEAM', '/team'],
  ['DATA POLICY', '/data-policy'],
];

const MobileMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuButtons.map(([menuButtonName, menuButtonPath]) => (
          <MenuItem
            component={Link}
            to={menuButtonPath}
            onClick={handleClose}
            key={menuButtonName}
          >
            {menuButtonName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileMenu;
