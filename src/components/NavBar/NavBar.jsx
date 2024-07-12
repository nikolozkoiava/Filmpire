import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Search, Sidebar } from "..";
import { fetchToken, createSectionId, moviesApi } from "../../utils";
import { setUser, userSelector } from "../../features/auth";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const isMobile = useMediaQuery("(max-width:639px)");
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  console.log(user);

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSectionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="h-20 flex-wrap justify-between ml-0 sm:ml-60 sm:flex">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              className="outline-none mr-2 hidden sm:block"
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className="hover:text-white no-underline"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  className="w-7 h-7"
                  alt="Profile"
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="sm:w-60 sm:flex-shrink-0">
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className="w-60"
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer className="w-60" variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
