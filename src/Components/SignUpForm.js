import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
//
// import {faEnvelope,faKey,faEye} from 'react-icons/fa';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faKey,faEye} from '@fortawesome/fontawesome-free-solid'
//


export default function SignUpForm(props) {
  // Password validation function
  let passValidate = (userInput) => {
    let test1 = userInput.upass.length >= 8;
    let test2 = userInput.upass === userInput.ucpass;
    let test3 = /[0-9]/.test(userInput.upass);
    let test4 = /[A-Z]/.test(userInput.upass);
    let test5 = /[!@#$%^&*]/.test(userInput.upass);
    console.log("test result=> ", test1, test2, test3, test4, test5);
    ////////////////////////////////////
    if (test5 === false)
      props.toaster("Password should contain special character.");
    if (test4 === false)
      props.toaster("Password should contain atleast one uppercase character.");
    if (test3 === false) props.toaster("Password should contain numeral.");
    if (test2 === false)
      props.toaster(
        "Confirmed password doesn't match with password mentioned."
      );
    if (test1 === false)
      props.toaster(
        "Password length should be equal or greater than 8 characters."
      );
    if (
      test1 === true &&
      test2 === true &&
      test3 === true &&
      test4 === true &&
      test5 === true
    ) {
      return true;
    }
  };
  //
  const [userdata, setuserdata] = useState(null);
  // toast.show();
  let register = (e) => {
    e.preventDefault();
    console.log("clicked registered");
    const formData = new FormData(e.currentTarget);
    let userInput = {};
    for (let [key, value] of formData.entries()) {
      userInput[key] = value;
    }
    console.log("userInput=> ", userInput);
    // if empty container, then put it as array
    if (userdata == null) {
      //password validation
      let per = passValidate(userInput);
      //
      if (per === true) {
        props.toaster("User has been registered...");
        setuserdata([userInput]);
        per = false;
        //
        e.target.reset();
      }
    } else {
      let resp = userdata.find((e) => {
        return e.uemail === userInput.uemail;
      });
      if (resp !== undefined) {
        props.toaster(`"${userInput.uemail}" already exists`);
      } else {
        //password validation
        let per = passValidate(userInput);
        //
        if (per === true) {
          props.toaster("User has been registered...");
          setuserdata([...userdata, userInput]);
          per = false;
          //
          e.target.reset();
        }
      }
    }

    //end of registration function for submit button
  };
  //
  //
  useEffect(
    (e) => {
      props.getRegisteredUsers(userdata);
    },
    [userdata]
  );
  //
  return (
    <div
      className="card  mb-3"
      style={{
        minWidth: "50%",
        margin: "2% 25% 0% 25%",
        backgroundColor: "rgba(255, 255, 255, 0.2)"
      }}
    >
      <div
        className="card-header d-flex justify-content-center"
        style={{ backgroundColor: "#2080ba", fontSize: "22px" }}
      >
        <div style={{ color: "white", fontWeight: "bold" }}>Sign Up</div>        
      </div>
      <form onSubmit={register}>
        <div className="card-body">
          {/* <!-- user-names --> */}
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold", color: "white" }}
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Steven"
                name="fname"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold", color: "white" }}
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Smith"
                name="lname"
                required
              />
            </div>
          </div>
          <div className="card-text">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold text-light mb-0"
            >
              Email-Address
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ color: "white", backgroundColor: "grey" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="uemail"
                required
              />
            </div>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold text-light"
            >
              Password
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ color: "white", backgroundColor: "grey" }}
              >
                {/* <i className="fa-solid fa-key"></i> */}
                <FontAwesomeIcon icon={faKey} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="********"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="upass"
                required
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                {/* <i className="fa-solid fa-eye-slash"></i> */}
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold text-light"
            >
              Confirm Password
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ color: "white", backgroundColor: "grey" }}
              >
                {/* <i className="fa-solid fa-key"></i> */}
                <FontAwesomeIcon icon={faKey} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="********"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="ucpass"
                required
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                {/* <i className="fa-solid fa-eye-slash"></i> */}
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
          {/* <!-- Register button --> */}
          <button id="submit_btn" className="mt-3 py-2" type="submit" style={{backgroundColor:'#2080ba'}}>
            Get Registered
          </button>
          {/* <!-- Already register line --> */}
          <div className="d-flex justify-content-center mt-4">
            <div className="text-light me-2">Already a User?</div>
            <Link to='/'><div style={{ color: "#2080ba", fontWeight: "bold" }}> Sign-In</div></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
