import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/e-shop.png'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.toolbar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="40px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
