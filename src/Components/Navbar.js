import React from "react";
import logo from "../Media/logo.PNG";
import {Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "'Brush Script MT', cursive"
          }}
        >
          <img
            src={logo}
            alt="company Logo"
            style={{ height: "25%", width: "25%", borderRadius: "25%" }}
            className="me-2"
          />
          User Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className="nav-item"
              style={{
                position: "absolute",
                right: "45%",
                top: "15%",
                fontWeight: "bold"
              }}
            >
              <Link to='/'
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              style={{
                position: "absolute",
                right: "35%",
                top: "15%",
                fontWeight: "bold"
              }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    User Management System
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Accountant software
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    B2B Services
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                position: "absolute",
                right: "28%",
                top: "15%",
                fontWeight: "bold"
              }}
            >
              <a className="nav-link" href="/" style={{ color: "white" }}>
                Portfolio
              </a>
            </li>
            {/* Registered Users */}
            <li
              className="nav-item dropdown"
              style={{
                position: "absolute",
                right: "15%",
                top: "15%",
                fontWeight: "bold"
              }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Registered-Users
              </a>
              <ul className="dropdown-menu">
                {props.registeredUsers == null ? (
                  <li>
                    <a className="dropdown-item" href="/">
                      Empty users list
                    </a>
                  </li>
                ) : (
                  props.registeredUsers.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="dropdown-item">{item.uemail}</a>
                      </li>
                    );
                  })
                )}
                {/* <li>
                  <a className="dropdown-item" href="/">
                    User Management System
                  </a>
                </li> */}
              </ul>
            </li>
            {/*  */}
            {props.welcomeflag===false?<Link to='/signup'><button
              className="btn btn-outline-light"
              style={{
                position: "absolute",
                right: "5%",
                top: "15%",
                fontWeight: "bold"}}>Register</button></Link>:<Link to='/'><button onClick={()=>{props.setWelcomeflag(false);props.setlogindata(null)}}
                className="btn btn-outline-light"
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "15%",
                  fontWeight: "bold"}}>Logout</button></Link>}
            {/* <Link to='/signup'><button
              className="btn btn-outline-light"
              style={{
                position: "absolute",
                right: "5%",
                top: "15%",
                fontWeight: "bold"
              }}
            >
              Register
            </button></Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
