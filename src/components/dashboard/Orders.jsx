import React from "react";
import MoverSideBar from "./MoverSideBar";
import TableData from "./TableData";

function Orders() {
  return (
    <div className="profile-container">
      <div className="profile-item-1">
        <MoverSideBar />
      </div>
      <div className="profile-item-2">
        <TableData/>
      </div>
    </div>
  );
}

export default Orders;
