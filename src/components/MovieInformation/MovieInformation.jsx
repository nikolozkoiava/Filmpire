import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
  CleaningServices,
} from "@mui/icons-material";

import { useState } from "react";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import genreIcons from "../../assets/genres";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";

import { MovieList } from "..";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { data: recommendations, isFetching: irRecommendationsFetching } =
    useGetRecommendationsQuery({
      list: "recommendations",
      movie_id: id,
    });

  const isMovieFavored = false;
  const isMovieWatchlisted = false;

  const addToFavorite = () => {};

  const addToWatchList = () => {};

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }
  return (
    <Grid
      container
      className="flex-col justify-around my-[0.625rem] mx-0
       sm:flex flex-wrap  "
    >
      <Grid item sm={12} lg={4}>
        <img
          className="shadow-custom rounded-custom mb-10 w-full   sm:w-1/2  md:w-4/5 md:mx-0 sm:mx-auto mx-auto"
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid
          item
          className="flex-col justify-around my-[0.625rem] mx-0
       sm:flex flex-wrap"
        >
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min /{" "}
            {data?.spoken_languages.length > 0
              ? `/ ${data.spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>
        <Grid item className="py-[0.625rem] px-0 flex justify-around flex-wrap">
          {data?.genres?.map((genre) => (
            <Link
              key={genre.name}
              className="flex justify-center items-center px-[1rem]  py-[0.5rem] sm:px-0 sm:py-0 "
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                height={10}
                width={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom className="pt-[0.625rem]">
          Overview
        </Typography>
        <Typography className="pb-[2rem]">{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data.credits.cast
              .map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      key={i}
                      item
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/actors/${character.id}`}
                      className="no-underline"
                    >
                      <img
                        className="w-full max-w-[7em] h-[8em] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                      />
                      <Typography color="textPrimary">
                        {character?.name}
                      </Typography>
                      <Typography color="textSecondary">
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container className="pt-[2rem]">
          <div className="flex flex-col w-full justify-between sm:flex-row">
            <Grid
              item
              xs={12}
              sm={6}
              className="flex flex-col w-full justify-between sm:flex-row"
            >
              <ButtonGroup size="small" variant="outline">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}
                >
                  TRAILER
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="flex flex-col w-full justify-between sm:flex-row"
            >
              <ButtonGroup size="small" variant="outline">
                <Button
                  onClick={addToFavorite}
                  endIcon={
                    isMovieFavored ? <FavoriteBorderOutlined /> : <Favorite />
                  }
                >
                  {isMovieFavored ? "Unfavorite" : "Favorite"}
                </Button>
                <Button
                  onClick={addToWatchList}
                  endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                >
                  {" "}
                  Watchlist
                </Button>
                <Button
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}
                >
                  <Typography
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%" className="m-auto">
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>

      <Modal
        closeAfterTransition
        className="flex items-center justify-center"
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className="w-4/5 h-4/5 sm:w-1/2 sm:h-1/2 "
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
