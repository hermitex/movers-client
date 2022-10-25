import React from "react";
import MoverSideBar from "./MoverSideBar";
import Orders from './Orders'
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";


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
                    element={<DashboardHome/>}/>
                    <Route
                    path="/dashboard/orders"
                    element={<Orders/>}/>
                </Routes>
            </div>
 
        </div>
    )
}

export default MoverDashboard;