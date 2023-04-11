// Used to display the search bar
import React from 'react'
import "../styles/sidebar.css"
import { Outlet } from "react-router-dom";

function Sidebar() {
    return (
        <div className="SideBar">
            <div className="Title">
                <h1>Priority</h1>
                <ul>
                    <li>Home</li>
                    <li>New Task</li>
                </ul>
            </div>
            <div className="Outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar