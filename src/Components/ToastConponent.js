import React, { useEffect, useState, useRef } from "react";
// import { Toast } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
//
import logo from "../Media/logo.PNG";
//
export default function ToastConponent(props) {
  const [count, setCount] = useState(0);
  const timerId = useRef();
  //
  useEffect(
    (e) => {
      if (props.toast) {
        timerId.current = setInterval(() => {
          setCount((count) => count + 1);
          // setCount(count + 1);
          console.log(count);
        }, 1000);
      } else {
        clearInterval(timerId.current);
        timerId.current = null;
        setCount(0);
      }
    },
    [props.toast]
  );

  return (
    <ToastContainer position="top-center" className="mt-5">
      <Toast
        onClose={() => {
          props.setToast(false);
        }}
        autohide
        show={props.toast}
        delay={5000}
      >
        <Toast.Header className="bg-dark text-light">
          <img
            src={logo}
            style={{ width: "10%", height: "10%" }}
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">{count} seconds ago</small>
        </Toast.Header>
        <Toast.Body>{props.toastmsg.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
// if (props.toast === true) {
//   console.log("toaster is active");
//   let count = 0;
//   let tid = setInterval(() => {
//     settimerId(tid);
//     count++;
//     console.log(count);
//   }, 1000);
// }
// if (props.toast === false) {
//   clearInterval(timerId);
//   console.log("toaster is closed");
// }
