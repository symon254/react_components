import React from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../../Routes/Routes";
import Unsplash from "../../Assets/Img/unsplash.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary  d-flex flex-column flex-md-row align-items-center pb-3 mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand my-2 text-lg">
          <img
            src={Unsplash}
            alt="logo"
            width={30}
            height={28}
            className="d-inline-block align-text-top mx-2"
          />
          Bootstrap
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {routes.map((route, i) => (
              <li key={i} className="nav-item">
                <NavLink
                  key={i}
                  to={route.path}
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                  })}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
