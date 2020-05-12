import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    margin: '1rem auto',
    textAlign: 'center',
    borderRadius: '25px'
  },

  name: {
    fontSize: '30'
  }
});

export default function MediaCard({show}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
        className={classes.media}
        image="https://image.freepik.com/free-vector/now-showing-with-electric-bulbs-frame-red-curtain-background_34230-211.jpg"
        component="img"
        alt="artwork"
        />
        <CardContent>
          <Typography className={classes.name} gutterBottom varian t="h5" component="h2">
              {show.show.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Genre: {show.show.genres + " "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         Rating: {show.show.rating.average}
        </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
