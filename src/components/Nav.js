import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({

  main:{
    backgroundColor: '#D3CFCE',
  }, 

  inputRoot: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#0A0200'
  },

  inputInput: {
    textAlign: 'center'
  },

  button: {
    // flexGrow: 1,
    // borderRadius: '10px',
    // textAlign: 'center',
    // width: '0.9px',
    // height: '20px',
    // padding:'0.1px',
    // backgroundColor: '#ffffff'
  }
}));

export default function Nav({ setQuery, toggle, setToggle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className = {classes.main} position="static">
        <Toolbar>
          <InputBase
            onChange={event => setQuery(event.target.value)}
            placeholder="Search for a movie or TV series..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
          <Button className= {classes.button}
            variant="contained"
            onClick={() => setToggle(!toggle)}
          >
            Search 
          </Button>
          <SearchIcon></SearchIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}
