import React from "react";

function UpdateDetails(){

    return(
        <div>
            <form>
            <label>NAME</label>
            <input
              type="text"
              placeholder="Enter full name"
            />
            <label>EMAIL</label>
            <input
              type="text"
              placeholder="Enter email"
            />
            </form>
        </div>
    )
}