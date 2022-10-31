import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Singnup from "./components/signup/Singnup";
import Error404 from "./components/error/Error404";
import { useEffect, useState } from "react";
import Footer from "./components/utils/Footer";

import MoverDashboard from "./components/dashboard/MoverDashboard";
import "@tremor/react/dist/esm/tremor.css";
import "./App.css";
import Orders from "./components/dashboard/Orders";
import DashboardHome from "./components/dashboard/DashboardHome";
import FinancialAnalytics from "./components/dashboard/FinancialAnalytics";
import Review from "./components/dashboard/Review";
import LocationAnalytics from "./components/dashboard/LocationAnalytics";
import GetStarted from "./components/moving-process/GetStarted";
import MyItems from "./components/moving-process/MyItems";
import Compare from "./components/moving-process/Compare";
import Book from "./components/moving-process/Book";
import Map from "./components/map/Map";
import LoginSignup from "./components/login/LoginSinup";
import DashBoardSideDrawer from "./components/dashboard/DashBoardSideDrawer";
import Datatable from "./components/datatable/Datatable";
import useFetch from "./components/hooks/useFetch";
import ItemList from "./components/list/List";
import sideLinks from "./components/dashboard/sideBarData";
import Test from "./components/datasource/Test";
import ItemTable from "./components/table/ItemTable";
import Profile from "./components/dashboard/Profile";
import ItemForm from "./components/item-form/ItemForm";
import formInputs from "./components/form-inputs/userInputs";
import Paypal from "./components/payment/Paypal";
import widgetData from "./components/dashboard/dashWidgetData";
import MovingProcessForm from "./components/moving-process/MovingProcessForm";

function App() {
  const [user, setUser] = useState(null);
  const [isShowFooter, setIShowFooter] = useState(true);

  // USING JWT
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    fetch(" http://localhost:4000/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:4000/logout", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        setUser(null);
        // navigate("/home");
        localStorage.removeItem("jwt");
      }
    });
  };

  return (
    <Router>
      <NavBar
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/">
          <Route
            index
            path="/"
            element={<Home user={user} />}
          />
          <Route
            path="/home"
            element={<Home user={user} />}
          />
          <Route
            path="/dashboard/test"
            element={<Test user={user} />}
          />
          <Route
            path="/dashboard"
            element={
              <DashBoardSideDrawer
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={
                  <DashboardHome
                    widgetData={widgetData}
                    user={user}
                  />
                }
                onLogout={handleLogout}
              />
            }
          />
          <Route
            path="/dashboard/customers"
            element={
              <ItemList
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={<Datatable user={user}/>}
              />
            }
          />
          <Route
            path="/dashboard/rates"
            element={
              <ItemList
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={<Datatable />}
              />
            }
          />
          <Route
            path="/dashboard/movers"
            element={
              <ItemList
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={<Datatable user={user} />}
              />
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <ItemList
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={<ItemForm formInputs={formInputs} />}
              />
            }
          />
          <Route
            path="/dashboard/new"
            element={
              <ItemList
                user={user}
                setIShowFooter={setIShowFooter}
                sidebarlinks={sideLinks}
                component={<ItemForm formInputs={formInputs} />}
              />
            }
          />
          <Route
            path="/moving-process"
            element={<MovingProcessForm />}
          />

          <Route
            path="/dashboard/home"
            element={<DashboardHome user={user} />}
          />
          <Route
            path="/pay"
            element={<Paypal user={user} />}
          />
          <Route
            path="/dashboard/financial-analytics"
            element={<FinancialAnalytics user={user} />}
            index
          />
          <Route
            path="login"
            element={<LoginSignup onLogin={setUser} />}
          />
          <Route
            path="signup"
            element={<LoginSignup onLogin={setUser} />}
          />
          <Route
            path="/get-started"
            element={<GetStarted user={user} />}
          />
          <Route
            path="/my-items"
            element={<MyItems user={user} />}
          />
          <Route
            path="/compare"
            element={<Compare user={user} />}
          />
          <Route
            path="/book"
            element={<Book user={user} />}
          />
          <Route
            path="/map"
            element={<Map user={user} />}
          />
          <Route
            path="/dashboard/reviews"
            element={<Review user={user} />}
          />
          <Route
            path="/dashboard/location-analytics"
            element={<LocationAnalytics />}
          />
          <Route
            path="login"
            element={<LoginSignup onLogin={setUser} />}
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
      {isShowFooter ? <Footer /> : null}
    </Router>
  );
}

export default App;
