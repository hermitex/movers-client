import React from "react";
import { Link } from "react-router-dom";
import "./DashboardStyles.css";

function MoverSideBar({ user, sidebarlinks }) {
  console.log(sidebarlinks);
  return (
    <div>
      <div className="sidebar-holder">
        <h1>MOOOVE.com</h1>
        <div>
          <div className="sidebar-image"></div>
          <div className="sidebar-name">
            <h2>{user?.full_name}</h2>
            <Link to="/dashboard/profile">My profile</Link>
          </div>
        </div>
        <br />
        <div className="dashboard-sidebar">
          <nav className="nav-menu-active">
            <ul className="nav-menu-items">
              {/* {sidebarlinks.admin.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.cName}
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })} */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MoverSideBar;
