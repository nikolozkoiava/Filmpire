import { Grid } from "@mui/material";
import { Movie } from "..";

const MoviesList = ({ movies }) => {
  return (
    <Grid
      container
      className="flex flex-wrap justify-center overflow-auto sm:justify-between"
    >
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MoviesList;
