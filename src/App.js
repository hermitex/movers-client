import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route
              index
              path="/"
              element={<Home />}
            />
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
