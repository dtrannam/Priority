// Used to display the search bar
import React from 'react'
import "../styles/sidebar.css"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="SideBar">
            <div className="Title">
                <h1>Priority</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/create"><li>New Task</li></Link>
                </ul>
            </div>
            <div className="Outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar