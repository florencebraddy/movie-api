import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(3),
    textAlign: "center"
  }
}));

export default function SimplePopover({ show, toggle, setToggle }) {
  console.log(show);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Learn More
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          <b>Summary:</b> {show.show.summary}
          <br />
          <br />
          <b>Language:</b> {show.show.language}
          <br />
          <br />
          <b>Where to watch:</b>
          {show.show.webChannel && <h3>{show.show.webChannel.name}</h3>}
        </Typography>
      </Popover>
    </div>
  );
}
