import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie, i }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="p-2">
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          className="text-center font-bold sm:flex sm:flex-col hover:cursor-pointer no-underline"
          to={`/movie/${movie.id}`}
        >
          <img
            alt={movie.title}
            className="rounded-[1.25rem] h-[18.75rem] mb-[0.625rem] transform hover:scale-105"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.fillmurray.com/200/300`
            }
          />
          <Typography
            className="text-primary text-ellipsis w-56 whitespace-nowrap overflow-hidden mt-2 mb-0 ext-center "
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
