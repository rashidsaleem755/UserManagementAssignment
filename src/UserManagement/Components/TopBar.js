import { CSVLink } from "react-csv";
//
import React from "react";
import { FaPlus, FaFileExcel } from "react-icons/fa";
import { useState } from "react";
//
import UserContainer from "./UserContainer";
import Alert from "./Alert";

export default function TopBar(props) {
  //
  let date = Date.now();
  let date2 = new Date(date).toGMTString();
  //All about Alert
  const [alert, setAlert] = useState(null);
  let changeAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    });
    setTimeout((e) => {
      setAlert(null);
    }, 5000);
  };
  //userdata should always be the array
  const [userData, setUserData] = useState(null);
  let collectData = (e) => {
    e.preventDefault();
    //
    let udata = document.getElementsByClassName("form-control");
    let arr_udata = Array.from(udata).map((e) => e.value);
    //putting values in userData
    let obj = {
      name: arr_udata[0],
      age: arr_udata[1],
      email: arr_udata[2],
      text: arr_udata[3],
      time: date2
    };
    //putting data in the userdata as the array
    if (userData == null) {
      setUserData([obj]);
      changeAlert("success", "User has been added.");
      //resetting values
      e.target.reset();
    } else {
      let result = userData.find((e) => {
        return e.email === obj.email;
      });
      if (result === undefined) {
        setUserData([...userData, obj]);
        changeAlert("success", "User has been added.");
        //resetting values
        e.target.reset();
      } else {
        changeAlert("success", "User already exists");
      }
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            User Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {/* Buttons */}
            <button
              className="btn btn-outline-danger mx-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i>
                <FaPlus />
              </i>
              <span className="ms-2">Add New User</span>
            </button>
            <CSVLink
              data={userData == null ? "Empty" : userData}
              className="btn btn-success me-3"
            >
              <i>
                <FaFileExcel />
              </i>
              <span className="ms-2">Export to Excel</span>
            </CSVLink>
            {/*  */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changeMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                {props.mode === "dark"
                  ? "Enable light mode"
                  : "Enable dark mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
      {/*  */}
      <div style={{ height: "50px", backgroundColor: "white" }}>
        <Alert alert={alert} setAlert={setAlert} />
      </div>
      {/* Modal */}
      <form onSubmit={collectData} id="uform">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  User Data
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">User-Name</label></div>
                  {/* <label htmlFor="uname" className="form-label">
                    User-Name
                  </label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    name="uname"
                    placeholder="Steven Smith"
                    required
                    style={{border:'1px solid black'}}
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">Age</label></div>
                  <input
                    type="number"
                    className="form-control"
                    id="uage"
                    name="uage"
                    placeholder="20"
                    style={{border:'1px solid black'}}
                    required
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">Email address</label></div>
                  <input
                    type="email"
                    className="form-control"
                    id="uemail"
                    name="uemail"
                    placeholder="name@example.com"
                    style={{border:'1px solid black'}}
                    required
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">About you?</label></div>
                  <textarea
                    className="form-control"
                    id="utext"
                    name="utext"
                    rows="3"
                    style={{border:'1px solid black'}}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // onClick={collectData}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/*  */}
      {/* data-bs-toggle="modal"
      data-bs-target="#staticBackdrop" */}
      <UserContainer
        userData={userData}
        setUserData={setUserData}
        mode={props.mode}
        changeAlert={changeAlert}
        //
      />
      {/* <Accordion /> */}
    </>
  );
}
