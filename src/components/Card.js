import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Popover from "../components/Popover";

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    margin: "1rem auto",
    textAlign: "center",
    borderRadius: "25px"
  },

  name: {
    fontSize: "30"
  },

  media: {
    height: "150"
  }
});

export default function MediaCard({ show, toggle, setToggle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{ height: 0, paddingTop: "70%" }}
          className={classes.media}
          image={
            show.show.image && (
              <img src={show.show.image.medium} alt="artwork"></img>
            )
          }
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {show.show.name}
          </Typography>
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
