import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import {
  Actors,
  MoviesInformation,
  Moviess,
  NavBar,
  Profile,
} from "./components";

function App() {
  return (
    <div className="flex h-full">
      <CssBaseline />
      <NavBar />
      <main className="flex-grow p-[2rem] w-full">
        <div className="h-16" />
        <Routes>
          <Route path="/movie/:id" element={<MoviesInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Moviess />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
