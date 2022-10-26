import React from "react";
import MoverSideBar from "./MoverSideBar";

function UpdateDetails() {
  return (
    <div className="profile-container">
      <div className="profile-item-1">
        <MoverSideBar />
      </div>
      <div className="profile-item-2">
        <div className="profile-picture">insert photo here</div>
        <form>
          <div className="profile-mover-details-2">
            <div className="profile-holder-1">
              <label className="profile-details">NAME</label>
              <input type="text" placeholder="Enter full name" />

              <label className="profile-details">Email</label>
              <input type="text" placeholder="Enter email" />

              <label className="profile-details">Phone Number</label>
              <input type="text" placeholder="Enter phone number" />

              <label className="profile-details">House Type</label>
              <input type="text" placeholder="Choose House Types" />
            </div>
            <div className="profile-holder-1">
              <label className="profile-details">Locations</label>
              <input type="text" placeholder="Choose locations" />

              <label className="profile-details">Price Range</label>
              <input type="text" placeholder="Choose price range" />
            </div>
          </div>
          <br />
          <input
            className="update-profile-btn"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateDetails;

{
  /* <div className="profile-mover-details">
<div className="profile-input-box">
  <label className="profile-details">Name</label>
  <input type="text" placeholder="Enter full name" />
</div>
<div className="profile-input-box">
  <label className="profile-details">Email</label>
  <input type="text" placeholder="Enter email" />
</div>
<div className="profile-input-box">
  <label className="profile-details">Phone Number</label>
  <input type="text" placeholder="Enter phone number" />
</div>
<div className="profile-input-box">
  <label className="profile-details">House Type</label>
  <input type="text" placeholder="Choose House Types" />
</div>
<div className="profile-input-box">
  <label className="profile-details">Locations</label>
  <input type="text" placeholder="EChoose locations" />
  <div className="profile-input-box">
  <label className="profile-details">Price Range</label>
  <input type="text" placeholder="Choose price range" />
</div>
</div>
</div> */
}
