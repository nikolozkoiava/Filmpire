import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.localStorage.href = "/";
  };

  return (
    <Box>
      <Box className="flex justify-between">
        <Typography variant="h4">My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add Favorites or watch List some movies to see them here!
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
