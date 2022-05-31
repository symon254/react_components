import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../../Routes/Routes";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../Assets/styles.css";
import { IconContext } from "react-icons";

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="sidebar">
                    <Link to="#" className="navbar-menubar">
                        <FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-ul-item" onClick={showSidebar}>
                        <li className="nav-toggle">
                            <Link to="/" className="navbar-menubar">
                                <AiFillCloseCircle />
                            </Link>
                        </li>
                        {routes.map((route, i) => {
                            return (
                                <li key={i} className={route.cName}>
                                    <Link to={route.path}>
                                        {route.icon}
                                        <span>{route.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default SideBar;
