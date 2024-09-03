import React, { useState, useEffect } from "react";
import CarrierPreviewComponent from "./CarrierPreviewComponent";
import CommunicationPreview from "./CommunicationPreview";
import './UserForm.scss';
const carrierModelObj = {
  name: "",
  company: "",
  yearOfExpeience: 0,
  currentCTC: 0,
  expectedCTC: 0,
};

const communicationModelObj = {
  mobile: "",
  mail: "",
  city: "",
};

const UserForm = () => {
  const [carrier, setCarrier] = useState(carrierModelObj);
  const [communication, setCommunication] = useState(communicationModelObj);
  console.log("userForm:", carrier, communication);

  useEffect(()=>{
    console.log("userForm useEffect without dependency")
  })

  const testNameChange = (e) =>{
    // carrier ={ ...carrier, name: e.target.value };
    setCarrier({ ...carrier, name: e.target.value })
  }

  const testClick = () =>{
    console.log('onClick')
    carrier.name = "Saravana";
  }
  return (
    <div className="user-form-container">
        <button onClick={()=> testClick()}>Test changes</button>
      <h3><center>Registration Form</center></h3>
      <div className="carrier-input-container">
        <h4>Carrier</h4>
        <div className="row">
          <div className="column">
            <label>Name : </label>
            <input
              type="string"
              value={carrier.name}
            //   onChange={(e) => setCarrier({ ...carrier, name: e.target.value })}
            onChange={(e)=> {testNameChange(e)}}
            />
          </div>
          <div className="column">
            <label>Current Company : </label>
            <input
              type="string"
              value={carrier.company}
              onChange={(e) =>
                setCarrier({ ...carrier, company: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Year of Experience : </label>
            <input
              type="string"
              value={carrier.yearOfExpeience}
              onChange={(e) => setCarrier({ ...carrier, yearOfExpeience: e.target.value })}
            />
          </div>
          <div className="column">
            <label>Current CTC : </label>
            <input
              type="string"
              value={carrier.currentCTC}
              onChange={(e) =>
                setCarrier({ ...carrier, currentCTC: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="communication-container">
        <h4>Communication</h4>
        <div className="row">
          <div className="column">
            <label>Mobile</label>
            <input
              type="string"
              value={communication.mobile}
              onChange={(e) =>
                setCommunication({ ...communication, mobile: e.target.value })
              }
            />
          </div>
          <div className="column">
            <label>Mail-ID</label>
            <input
              type="string"
              value={communication.mail}
              onChange={(e) =>
                setCommunication({ ...communication, mail: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="preview-container">
        <h3><center>Preview</center></h3>
        <div>
            <CarrierPreviewComponent data={carrier}/>
        </div>
        <div>
              <CommunicationPreview data={communication}/>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
