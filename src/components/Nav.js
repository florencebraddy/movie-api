import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav({ setQuery, toggle, setToggle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <InputBase
            onChange={event => setQuery(event.target.value)}
            placeholder="Search for a movie..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
          <Button
            variant="contained"
            color=""
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
