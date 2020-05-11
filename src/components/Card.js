import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard({show}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image= "/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
        //   className={classes.media}
        // //   image= {show.show.image.original} 
        // image="/static/images/cards/contemplative-reptile.jpg"
        //   title="artwork"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {show.show.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {show.show.genres + " "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {show.show.rating.average}
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
