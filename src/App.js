import logo from "./logo.svg";
import "./App.css";

/* import packages */
import { Route, Routes } from "react-router-dom";

/* import pages components */
import Home from "./Pages/Home";
import MovieDetailPage from "./Pages/MovieDetailPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./core/Layout/Layout";
function App() {
  let LayoutComponent = (Component) => <Layout BodyComponent={Component} />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LayoutComponent(Home)} />
        <Route path="/login" element={LayoutComponent(LoginPage)} />
        <Route path="/register" element={LayoutComponent(RegisterPage)} />
        <Route
          path="/movies/detail/:id"
          element={LayoutComponent(MovieDetailPage)}
        />
      </Routes>
    </div>
  );
}

export default App;
