import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../styles/MobileMenuStyles';

const teamViewName = 'TEAM';
const contactViewName = 'CONTACT';
const dataPolicyViewName = 'DATA POLICY';

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
        <MenuItem onClick={handleClose}>{teamViewName}</MenuItem>
        <MenuItem onClick={handleClose}>{contactViewName}</MenuItem>
        <MenuItem onClick={handleClose}>{dataPolicyViewName}</MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
