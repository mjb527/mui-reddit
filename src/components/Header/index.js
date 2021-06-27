import React, { useState } from 'react';
import { AppBar, Toolbar, Icon, InputBase, ClickAwayListener } from '@material-ui/core';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RedditIcon from '@material-ui/icons/Reddit';
import { Link } from 'react-router-dom';

export default function SearchAppBar() {

  const theme = useTheme();

  const [ searchTextColor, setSearchTextColor ] = useState(theme.palette.accent.darkest);
  const [ inputClicked, setInputClicked ] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    header: {
      backgroundColor: '#ff4500',
      width: "100%",
      paddingTop: '8px',
      paddingBottom: '8px'
    },
    iconWrapper: {
      color: '#fafafa',
      '&:hover': {
        color: '#000000',
        backgroundColor: '#ff4500'
      }
    },
    redditIcon: {
      padding: '2px',
      borderRadius: '100%'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: '1px solid ' + theme.palette.accent.darker,
      backgroundColor: theme.palette.accent.main,
      color: searchTextColor,
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 1),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(4),
        position: 'absolute',
        width: '50%',
        right: 0
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
      color: searchTextColor
    },
    /* used to provide room between header and content */
    spacer: {
      marginBottom: "10px"
    }
  }));

  const classes = useStyles();

  const inputBaseClickAway = (e) => {
    e.preventDefault();
    setInputClicked(false);
    setSearchTextColor(theme.palette.accent.darkest);
  }

  const inputBaseClick = (e) => {
    e.preventDefault();
    setInputClicked(true);
    setSearchTextColor('black');
  }

  const Search =
    <ClickAwayListener onClickAway={inputBaseClickAway}>
      <InputBase
        fullWidth={true}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onClick={inputBaseClick}
        onMouseEnter={
          (e) => {
            e.preventDefault();
            if(!inputClicked) setSearchTextColor('black');
          }
        }
        onMouseLeave={
          (e) => {
            e.preventDefault();
            if(!inputClicked) setSearchTextColor(theme.palette.accent.darkest);
          }
        }
        inputProps={{ 'aria-label': 'search' }}
      />
    </ClickAwayListener>


  return (
    <div className={classes.root}>
      <AppBar
          className={classes.header}
          position='absolute'
        >
        <Toolbar>
          <Link to="/">
            <Icon className={classes.iconWrapper}>
              <RedditIcon className={classes.redditIcon} fontSize="large"/>
            </Icon>
          </Link>
          <div fullWidth className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            { Search }
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar
        className={classes.spacer}
       />
    </div>
  );
}
