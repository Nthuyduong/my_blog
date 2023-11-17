import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return(
        <div id="sidebar" className="w-2/12 h-full fixed p-3">
            <div className="flex sidebar-title pb-4">
                <div className="font-bold logo">BLOGLOGO</div>
                <div className="ml-auto">
                    <a href="#">x</a>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="content-first pb-2">
                    <ul>
                        <li><Link to="">Dashboard</Link></li>
                        <li><Link to="">Category</Link></li>
                        <li><Link to="">Post</Link></li>
                        <li><Link to="">Gallery</Link></li>
                    </ul>
                </div>
                <div className="content-second pt-2">
                    <ul>
                        <li><Link to="">Users</Link></li>
                        <li><Link to="">Settings</Link></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <button className="absolute w-full my-btn-pr">Log out</button>
            </div>
        </div>
    )
}

export default Sidebar;