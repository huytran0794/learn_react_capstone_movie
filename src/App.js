import "./App.css";

/* import packages */
import { Route, Routes } from "react-router-dom";

/* import pages components */
import Layout from "./core/Layout/Layout";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import MovieBookingPage from "./Pages/Booking/MovieBookingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="movies">
          <Route path="detail/:id" element={MovieDetailPage} />
          <Route path="booking-ticket/:scheduleId" element={MovieDetailPage} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
// background: #283048;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #859398, #283048);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to top, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
