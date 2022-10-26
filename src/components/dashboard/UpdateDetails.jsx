import React from "react";
import MoverSideBar from "./MoverSideBar";

function UpdateDetails() {
  return (
    <div className="profile-container">
      <div className="profile-item-1">
        <MoverSideBar />
      </div>
      <div className="profile-item-2">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter full name" />
        <label>Email</label>
        <input type="text" placeholder="Enter email" />
        <label>Phone Number</label>
        <input type="text" placeholder="Enter phone number" />
        <label>House Type</label>
        <input type="text" placeholder="Choose House Types" />

        <label>Locations</label>
        <input type="text" placeholder="Choose locations" />
        <label>Price Range</label>
        <input type="text" placeholder="Choose price range" />
        <input type="submit" value="Update Profile" />
      </form>
      </div>
    </div>
  );
}

export default UpdateDetails;
