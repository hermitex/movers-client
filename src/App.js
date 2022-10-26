import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Singnup from "./components/signup/Singnup";
import Error404 from "./components/error/Error404";
import { useEffect, useState } from "react";
import Footer from "./components/utils/Footer";

import MoverDashboard from "./components/dashboard/MoverDashboard";
import "./App.css";
import Orders from "./components/dashboard/Orders";
import DashboardHome from "./components/dashboard/DashboardHome";
import FinancialAnalytics from "./components/dashboard/FinancialAnalytics";
import Review from "./components/dashboard/Review";
import LocationAnalytics from "./components/dashboard/LocationAnalytics";
import UpdateDetails from "./components/dashboard/UpdateDetails";
import GetStarted from "./components/moving-process/GetStarted";
import MyItems from "./components/moving-process/MyItems";
import Compare from "./components/moving-process/Compare";
import Book from "./components/moving-process/Book";
import Map from "./components/map/Map";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
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
            path="/dashboard/orders"
            element={<Orders />}
          />
          <Route
            path="/dashboard/home"
            element={<DashboardHome />}
          />
          <Route
            path="/dashboard/orders"
            element={<Orders />}
          />
          <Route
            path="/dashboard/update-details"
            element={<UpdateDetails />}
          />
          <Route
            path="/dashboard/financial-analytics"
            element={<FinancialAnalytics />}
            index
          />
          <Route
            path="login"
            element={<Login onLogin={setUser} />}
          />
          <Route
            path="signup"
            element={<Singnup onLogin={setUser} />}
          />
          <Route
            path="/get-started"
            element={<GetStarted />}
          />
          <Route
            path="/my-items"
            element={<MyItems />}
          />
          <Route
            path="/compare"
            element={<Compare />}
          />
          <Route
            path="/book"
            element={<Book />}
          />
          <Route
            path="/map"
            element={<Map />}
          />
          <Route
            path="/dashboard/reviews"
            element={<Review />}
          />
          <Route
            path="/dashboard/location-analytics"
            element={<LocationAnalytics />}
          />
          <Route
            path="login"
            element={<Login onLogin={setUser} />}
          />
          <Route
            path="signup"
            element={<Singnup onLogin={setUser} />}
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
