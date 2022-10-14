import "./App.css";

/* import packages */
import { Route, Routes } from "react-router-dom";

/* import pages components */
import Layout from "./core/Layout/Layout";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MovieDetailPage from "./Pages/Details/MovieDetailPage";
import MovieBookingPage from "./Pages/Booking/MovieBookingPage";
import Profile from "./Pages/Profile/Profile";
import CinemaPage from "./Pages/CinemaPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="cinemas" element={<CinemaPage />} />
          <Route path="movies">
            <Route path="detail/:id" element={<MovieDetailPage />} />
            <Route
              path="book-ticket/:scheduleId"
              element={<MovieBookingPage />}
            />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
