import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Singnup from "./components/signup/Singnup";
import Error404 from "./components/error/Error404";
import { useEffect, useState } from "react";
import Footer from "./components/utils/Footer";
import MoverDashboard from "./components/dashboard/MoverDashboard";
import './App.css';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
  }, [])

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
              path="/dashboard/*"
              element={<MoverDashboard />}
            />
            <Route
              path="login"
              element={<Login onLogin={setUser}/>}
            />
            <Route
              path="signup"
              element={<Singnup onLogin={setUser}/>}
            />
            <Route
              path="*"
              element={<Error404 />}
            />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
