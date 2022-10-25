import React from "react";
import MoverSideBar from "./MoverSideBar";
import DashboardHome from "./DashboardHome";
import Review from "./Review";
import LocationAnalytics from "./LocationAnalytics";
import FinancialAnalytics from "./FinancialAnalytics";
import Orders from "./Orders";
import { Route, Routes } from "react-router-dom";

function MoverDashboard() {
  return (
    <div className="profile-container">
      <div className="profile-item-1">
        <MoverSideBar />
      </div>
      <div className="profile-item-2">
        <DashboardHome/>
      </div>
    </div>
  );
}

export default MoverDashboard;
