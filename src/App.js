import logo from "./logo.svg";
import "./App.css";

/* import packages */
import { Route, Routes } from "react-router-dom";

/* import pages components */
import Home from "./Pages/Home";
import BookList from "./Pages/BookList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booklist"
          element={
            <h2 className="text-center text-red-400">Hello book reader</h2>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
