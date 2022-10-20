import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Singnup from "./components/signup/Singnup";
import Error404 from "./components/error/Error404";
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
              path="/home"
              element={<Home />}
            />
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="signup"
              element={<Singnup />}
            />
            <Route
              path="*"
              element={<Error404 />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
