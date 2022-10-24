import React from "react";
import { SideBarData } from "./SideBarData";
import { Link } from 'react-router-dom';
import './SideBar.css'

function MoverSideBar(){


    return(
        <div>
            <div>
                <h1>MOOOVE.com</h1>
                <div>
                <div>profile photo here</div>
                <h2>Tiberius Mairura</h2>
                <h6>My Profile</h6>
                </div>
                <br/>
                <div className="dashboard-sidebar">
                    <nav className="nav-menu-active">
                        <ul className="nav-menu-items">
                            {SideBarData.map((item, index)=>{
                                return(
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MoverSideBar;