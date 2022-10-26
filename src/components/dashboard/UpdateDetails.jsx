import React from "react";

function UpdateDetails(){

    return(
        <div>
            <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
            />
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
            />
            <label>House Type</label>
            <input
              type="text"
              placeholder="Choose House Types"
            />

            <label>Locations</label>
            <input
              type="text"
              placeholder="Choose locations"
            />
            <label>Price Range</label>
            <input
              type="text"
              placeholder="Choose price range"
            />
            <input
              type="submit"
              value="Update Profile"
            />
            </form>
        </div>
    )
}

export default UpdateDetails;