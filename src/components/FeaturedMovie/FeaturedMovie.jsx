import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";

import { Link } from "react-router-dom";

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;

  return (
    <div>
      <Box
        component={Link}
        to={`/movie/${movie.id}`}
        className="mb-[20px] flex justify-center h-[490px] no-underline"
      >
        <Card className="w-full flex items-end flex-col relative ">
          <CardMedia
            media="picture"
            alt={movie.title}
            image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            className="absolute top-0 right-0 h-full w-full bg-custom-rgba bg-blend-darken "
          />
          <Box padding="20px">
            <CardContent className="text-white w-full sm:w-[40%] relative bg-transparent top-72">
              <Typography variant="h5" gutterBottom>
                {movie.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {movie.overview}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default FeaturedMovie;
