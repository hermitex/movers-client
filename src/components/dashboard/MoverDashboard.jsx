import React from "react";
import MoverSideBar from "./MoverSideBar";

function MoverDashboard(){
    return(
        <div className="profile-container"> 
           <div className="profile-item-1">
            <MoverSideBar/>
            </div> 
           <div className="profile-item-2">
                <p>This is Division 2</p>
            </div> 
        </div>
    )
}

export default MoverDashboard;