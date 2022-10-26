import React from "react";

function DashboardHome(){
    return(
        <div className="dashboard-home-container">
            <div className="mover-1">
                <h4>MOVES</h4>
                <h6>98</h6>
                <p>See all users </p>
            </div>
            <div className="mover-1">
                <h4>EARNINGS</h4>
                <h6>Ksh. 250,000</h6>
                <p>See details</p>
            </div>
            <div className="mover-1">
                <h4>BALANCE</h4>
                <h6>Ksh. 200,000</h6>
                <p>See details</p>
            </div>
        </div>
    )
}

export default DashboardHome;