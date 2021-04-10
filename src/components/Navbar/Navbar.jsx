import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

import logo from '../../assets/e-shop.png'

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.toolbar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="40px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
