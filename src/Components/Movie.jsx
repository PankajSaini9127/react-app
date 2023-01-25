import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Movie({ elem, id, handleBooking }) {
  const { Title, Poster, Year } = elem;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{ m: 1 }}>
        <CardMedia
          sx={{ height: "200px !important", width: "200px !important" }}
          image={Poster}
          title={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {Title}
          </Typography>
          <Typography gutterBottom variant="body1">
            {Year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleBooking(id)}
          >
            Book Show
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Movie;
