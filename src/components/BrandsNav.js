import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import adidas from '../img/addidas.png';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function BrandsNav() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: '9vh' }}>
      <AppBar position='static' className='brandNav'>
        <Toolbar className='Bnav'>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div>
            <img src={adidas} className='brandImg' />
          </div>

          <div />
          <div>
            <IconButton aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={1} color='secondary'>
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            <Typography className='cartInfo' variant='p' noWrap>
              Cart
            </Typography>

            <IconButton aria-label='show 4 new mails' color='inherit'>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography className='cartInfo' variant='p' noWrap>
              Wishlist
            </Typography>

            <IconButton aria-label='show 4 new mails' color='inherit'>
              <PersonIcon />
            </IconButton>
            <Typography className='cartInfo' variant='p' noWrap>
              Login
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
