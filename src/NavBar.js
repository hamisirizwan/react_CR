import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-around">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "grey" }}
              >
                TODO-APP
              </Link>

              <Link
                to="/word-app"
                style={{
                  textDecoration: "none",
                  color: "grey",
                  marginLeft: "100px",
                }}
              >
                WORD-TYPE-APP
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
