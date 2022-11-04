import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Singnup from "./components/signup/Signup";
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

import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contacts/Contact";
import MovingProcessForm from "./components/moving-process/MovingProcessForm";
import ItemsHolder from "./components/moving-process/ItemsHolder";
import HowitWorks from "./components/home/HowitWorks";
import WhyMoover from "./components/home/WhyMoover";
import PaypalPayment from "./components/payment/PaypalPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import SuccessModal from "./components/moving-process/Success";
import useDashWidgetData from "./components/dashboard/useDashWidgetData";

function App() {
  const [user, setUser] = useState(null);
  const [isShowFooter, setIShowFooter] = useState(true);

  // USING JWT
  const token = localStorage.getItem("jwt");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    fetch(`${baseUrl}/me`, {
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
    const baseUrl = process.env.REACT_APP_BASE_URL;
    fetch(`${baseUrl}/me`, {
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
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVFQQPBVQ3lGiR05sGozQMEQDMAO0Egq3ckF4qe1jA8Y6EOits4nOpzXUMzNw_aWthfYFBVC5HmkUirq",
      }}
    >
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
                      widgetData={useDashWidgetData}
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
                  component={<Datatable user={user} />}
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
              path="/dashboard/bookings"
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
              element={<MovingProcessForm user={user} />}
            />
            <Route
              path="/dashboard/home"
              element={<DashboardHome user={user} />}
            />
            <Route
              path="/pay"
              element={<PaypalPayment user={user} />}
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
              path="/moving-process"
              element={<GetStarted user={user} />}
            />
            <Route
              path="/success"
              element={
                <SuccessModal
                  isOpen={true}
                  message="Thanks for booking your move with us"
                  user={user}
                />
              }
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
            <Route
              path="/about"
              element={<About user={user} />}
            />
            <Route
              path="/services"
              element={<Services user={user} />}
            />
            <Route
              path="/contact"
              element={<Contact user={user} />}
            />
            <Route
              path="/home/how-it-works"
              element={<HowitWorks user={user} />}
            />
            <Route
              path="/mooove-package"
              element={<WhyMoover user={user} />}
            />
          </Route>
        </Routes>
        {isShowFooter ? <Footer /> : null}
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
