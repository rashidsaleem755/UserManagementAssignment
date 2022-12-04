import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
//
import Accordion from "./Accordion";
//
export default function UserContainer(props) {
  //
  const [keyUpdate, setkeyUpdate] = useState("");
  //
  let datalength = props.userData && props.userData.length;
  const [len, setLen] = useState(!props.userData ? null : datalength);
  // console.log("outside length=> ", len);
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
    let fieldData = document.getElementsByClassName("fieldCollection");
    //
    let arr = [obj.name, obj.age, obj.email, obj.text];
    console.log("arr data", arr);
    //

    //
    for (let i = 0; i < fieldData.length; i++) {
      fieldData[i].value = arr[i];
    }
    //
    setkeyUpdate(key);
  };
  //
  let updateChanges = () => {
    console.log("changes updates");
    // console.log("Changes to be made in => ", props.userData[keyUpdate]);
    let fieldData = document.getElementsByClassName("fieldCollection");
    props.userData[keyUpdate].name = fieldData[0].value;
    props.userData[keyUpdate].age = fieldData[1].value;
    props.userData[keyUpdate].email = fieldData[2].value;
    props.userData[keyUpdate].text = fieldData[3].value;
    //re-rendering
    setkeyUpdate("");
    //
    props.changeAlert("success", "Data has been updated.");
    //cleaning fields
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
              <div className="modal-body">
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">User-Name</label></div>
                  
                  <input
                    type="text"
                    className="form-control fieldCollection"
                    id="uname"
                    name="uname"
                    required
                    style={{border:'1px solid black'}}
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">Age</label></div>
                  
                  <input
                    type="number"
                    className="form-control fieldCollection"
                    id="uage"
                    name="uage"
                    required
                    style={{border:'1px solid black'}}
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">Email address</label></div>
                  
                  <input
                    type="email"
                    className="form-control fieldCollection"
                    id="uemail"
                    name="uemail"
                    required
                    style={{border:'1px solid black'}}
                  />
                </div>
                <div className="mb-3">
                <div className="d-flex justify-content-start"><label htmlFor="uname" className="form-label">About you?</label></div>
                  
                  <textarea
                    className="form-control fieldCollection"
                    id="utext"
                    name="utext"
                    rows="3"
                    style={{border:'1px solid black'}}
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={updateChanges}
                >
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
