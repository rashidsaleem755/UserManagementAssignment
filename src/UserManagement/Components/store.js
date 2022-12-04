import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
//
import Accordion from "./Accordion";
//
export default function UserContainer(props) {
  let datalength = props.userData && props.userData.length;
  const [len, setLen] = useState(!props.userData ? null : datalength);
  // console.log("outside length=> ", len);
  // console.log("len=>", len);
  let deleteData = (key, name) => {
    props.userData.splice(key, 1);
    setLen(props.userData.length);
    props.changeAlert("success", `${name} has been deleted.`);
    console.log("clicked delete button");
  };
  let updateData = (obj, key) => {
    // console.log("clicked updated", obj, key);
    let datas = props.userData[key];
    console.log("datas=>", datas);
    //accessing the form in order to first put data and then get data
    let address = document.getElementById("userupdate");
    let updateForm = new FormData(address);
    //
    let arr = [obj.name, obj.age, obj.email, obj.text];
    console.log("arr data", arr);

    //
    let keyarr = [];
    for (let [key, value] of updateForm) {
      keyarr.push(key);
    }
    console.log("keyarr=> ", keyarr);
    //
    for (let i = 0; i < keyarr.length; i++) {
      updateForm.set(`${keyarr[i]}`, "data submission");
      // console.log("in loop", keyarr[i]);
    }
    for (const [index, value] of updateForm.entries()) {
      console.log("from entries=>", `${index}, ${value}`);
    }
    let checkdoc = document.getElementsByClassName("checking");
    checkdoc[0].value = "waka waka";
    console.log("checkdoc", checkdoc[0].value);
    //
  };
  //
  return (
    <div>
      <table
        className={`table table-striped table-hover mt-3 table-${props.mode}`}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.userData == null ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Nothing to preview
              </td>
            </tr>
          ) : (
            props.userData.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.time}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    {/* Action-buttons */}
                    <td>
                      <button
                        className="me-2"
                        onClick={(e) => deleteData(index, item.name)}
                      >
                        <i>
                          <FaTrash />
                        </i>
                      </button>
                      <button
                        onClick={(e) => updateData(item, index)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        <i>
                          <FaPen />
                        </i>
                      </button>
                    </td>
                  </tr>
                  <tr style={{ color: "red" }}>
                    <td colSpan="6">
                      <Accordion
                        mode={props.mode}
                        name={item.name}
                        text={item.text}
                      />
                    </td>
                  </tr>
                  {/* <Accordion /> */}
                </>
              );
            })
          )}
        </tbody>
      </table>
      {/* modal form for updates:\n */}
      {/* <!-- Modal --> */}
      <form id="userupdate">
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Updating user-data
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input name="uname" className="checking" />
                <input name="uage" className="checking" />
                <input name="uemail" className="checking" />
                <input name="utext" className="checking" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/*  */}
    </div>
  );
}
