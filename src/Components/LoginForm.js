import React from "react";
import { Link,useNavigate } from "react-router-dom";
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faKey, faEye } from '@fortawesome/fontawesome-free-solid'
//

export default function LoginForm(props) {
  //use for navigation
  const navigate = useNavigate();
  //
  let arr = [
    "einstein1@gmail.com",
    "einstein12@gmail.com",
    "einstein123@gmail.com"
  ];
  let collectLogindata = (e) => {
    e.preventDefault();
    console.log("login is clicked");
    let formData = new FormData(e.currentTarget);
    let loginInputdata = {};
    for (const [key, value] of formData.entries()) {
      loginInputdata[key] = value;
      // console.log(key, value);
    }
    //
    if(props.registeredUsers==null){
      props.toaster("No user exist...")
    }
    //
    console.log(loginInputdata);
    let userExist = props.registeredUsers.find((e) => {
      return e.uemail === loginInputdata.uemail;
    });
    if (userExist == undefined) {
      console.log("user does not exist");
      props.toaster("User does not exist with this email address.")
    } else {
      console.log("email matched...");
      let passMatch = props.registeredUsers.find((e) => {
        return e.upass === loginInputdata.upass;
      });
      if (passMatch === undefined) {
        console.log("password does not matched");
        props.toaster("Password does not match.")
      } else {
        console.log("password matched...");
        // props.setlogindata(loginInputdata)
        props.setlogindata(userExist)
        navigate("/welcome")
        //
        props.setWelcomeflag(true)
        //
      }
    }
    //
    // e.target.reset();
  };
  return (
    <div
      className="card  mb-3"
      style={{
        minWidth: "50%",
        margin: "5% 25% 0% 25%",
        backgroundColor: "rgba(255, 255, 255, 0.2)"
      }}
    >
      <div
        className="card-header d-flex justify-content-center"
        style={{ backgroundColor: "#2080ba", fontSize: "22px" }}
      >
        <div style={{ color: "white", fontWeight: "bold" }}>Sign In</div>
      </div>
      <form onSubmit={collectLogindata}>
        <div className="card-body">
          <div className="card-text">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold text-light mb-3"
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
              </span>
              <input
                type="email"
                name="uemail"
                className="form-control"
                placeholder="name@example.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
              // required
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
                <FontAwesomeIcon icon={faKey} />
              </span>
              <input
                type="text"
                name="upass"
                className="form-control"
                placeholder="********"
                aria-label="Username"
                aria-describedby="basic-addon1"
              // required
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
          {/* keep remeber and Forgot Password */}
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              {/* switch */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
              <p className="text-light">Keep Me Logged In</p>
            </div>
            <div className="text-light">Forgot Password?</div>
          </div>
          {/* button */}
          <button id="submit_btn" type="submit" style={{backgroundColor:'#2080ba'}} className='py-2'>
            Get Started
          </button>
          {/* forgot password */}
          <div className="d-flex justify-content-center mt-5">
            <div className="text-light me-2">Don't you have an Account?</div>
            <Link to='/signup'><div style={{ color: "#2080ba", fontWeight: "bold" }}> Sign-Up</div></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
