import React from "react";

export default function Alert(props) {
  let nullifyAlert = () => {
    props.setAlert(null);
  };
  let Type =
    props.alert !== null &&
    props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);
  return props.alert ? (
    <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Type} </strong>
        {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          onClick={nullifyAlert}
        ></button>
      </div>
    </div>
  ) : (
    <marquee behavior="scroll" direction="left" className="mt-3">
      User Management made easy with react...
    </marquee>
  );
}
