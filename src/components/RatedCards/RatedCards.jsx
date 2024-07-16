import { Typography, Box } from "@mui/material";

import Movie from "../Moviee/Movie";

const RatedCards = ({ title, data }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className="">
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
