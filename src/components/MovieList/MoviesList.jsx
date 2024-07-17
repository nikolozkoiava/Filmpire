import { Grid } from "@mui/material";
import { Movie } from "..";

const MoviesList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid
      container
      spacing={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
      sx={{ overflow: "auto", margin: "auto" }}
    >
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MoviesList;
