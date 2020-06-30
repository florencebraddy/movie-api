import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Popover from "./Popover";

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    maxHeight: "50%",
    margin: "1rem auto",
    textAlign: "center",
    borderRadius: "25px"
  },

  name: {
    fontSize: "50px",
    color: "grey"
  },

  media: {
    width: '100%',
    // Without height undefined it won't work
    height: "undefined",
    // figure out your image aspect ratio
    aspectRatio: "135 / 76"
    // maxWidth: "90%",
    // height: "50vh",
    // aspectRatio: 3/2,
    // // boxShadow: 0 4px 8px 0 snow;
    // borderRadius: "25px",
    // margin: "90px"
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // transition: 0.3s;
    // text-align: center;
  
  
    // height: 0,
    // height:"750px",
    // maxWidth: "90%",
    // margin: "30px",
  }
});

export default function MediaCard({ show, toggle, setToggle }) {
  const classes = useStyles();
  function getImage() {
    if (show.show.image) return show.show.image.medium;
    return "https://images.all-free-download.com/images/graphiclarge/cinema_clapper_312982.jpg"
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={getImage()}></CardMedia>
        <CardContent>
          <Typography className={classes.name}>{show.show.name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {show.show.genres + " "}{" "}
          </Typography>
          <Typography>Rating: {show.show.rating.average}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Popover
          toggle={toggle}
          setToggle={setToggle}
          show={show}
          size="small"
          color="primary"
        >
          Learn More
        </Popover>
      </CardActions>
    </Card>
  );
}
