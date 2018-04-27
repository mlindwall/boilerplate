import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, withStyles } from "material-ui";

const styles = {
  card: {
    marginRight: 32,
    marginBottom: 32,
    width: 345,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class HomeCard extends Component {

  render() {

    let { body, classes, headline, img } = this.props;

    return (
      <Card className={ classes.card }>
        <CardMedia
          className={ classes.media }
          image={ img ? img : "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg" }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            { headline }
          </Typography>
          <Typography component="p">
            { body }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )

  }


}

export default withStyles(styles)(HomeCard);