import React from "react";
//
// import {FaPhone,FaEnvelope} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/fontawesome-free-solid'
//

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="me-4">
      <FontAwesomeIcon icon={faPhone} flip="horizontal"/>
       <span className="ms-1">+92 332 5678910</span>
      </div>
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
      <span className="ms-1">info@skyland.com</span>
      </div>
    </div>
  );
}
{/* <span className='fa-flip'><FontAwesomeIcon icon={faPhone} /></span> */}
