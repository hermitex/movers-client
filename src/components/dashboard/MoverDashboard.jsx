import React from "react";
import MoverSideBar from "./MoverSideBar";
import DashboardHome from "./DashboardHome";
import Review from "./Review";
import LocationAnalytics from "./LocationAnalytics";
import FinancialAnalytics from "./FinancialAnalytics";
import Orders from './Orders'
import { Route, Routes } from "react-router-dom";


function MoverDashboard(){
    return(
        <div className="profile-container"> 
            <div className="profile-item-1">
                <MoverSideBar/>
            </div> 
                <div className="profile-item-2">
                    <Routes>
                        <Route
                            path="/dashboard/home"
                            element={<DashboardHome/>}
                        />
                        <Route
                            path="/dashboard/orders"
                            element={<Orders/>}
                        />
                        <Route
                            path="/dashboard/financial-analytics"
                            element={<FinancialAnalytics/>}
                        />
                        <Route
                            path="/dashboard/reviews"
                            element={<Review/>}
                        />
                        <Route
                            path="/dashboard/location-analytics"
                            element={<LocationAnalytics/>}
                        />
                    </Routes>
                </div>
        </div>
    )
}

export default MoverDashboard;