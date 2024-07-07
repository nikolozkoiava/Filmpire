import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie, i }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="p-2">
      <Typography
        className="text-primary text-ellipsis w-56 whitespace-nowrap overflow-hidden mt-2 mb-0 ext-center "
        variant="h5"
      >
        {movie.title}
      </Typography>
    </Grid>
  );
};

export default Movie;
