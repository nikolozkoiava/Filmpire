import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import MoviesList from "../MovieList/MoviesList";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  console.log(data);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px">
        <Typography variant="h4">An error has occurred.</Typography>
      </Box>
    );
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <MoviesList movies={data} />
    </div>
  );
};

export default Movies;
