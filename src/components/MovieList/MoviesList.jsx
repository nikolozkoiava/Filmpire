import { Grid } from "@mui/material";
import { Movie } from "..";

const MoviesList = ({ movies, numberOfMovies }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
      sx={{ overflow: "auto", margin: "auto" }}
    >
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MoviesList;
