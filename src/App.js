import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contactus/ContactUs";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home />}
            />
            <Route
            path="aboutus"
            element={<AboutUs/>}
            />
            <Route
            path="services"
            element={<Services/>}
            />
            <Route
            path="contactus"
            element={<ContactUs/>}
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
