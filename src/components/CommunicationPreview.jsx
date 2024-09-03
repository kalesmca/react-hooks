import React from "react";

const CommunicationPreview = (props) =>{
    console.log("Communication preview:", props);
    return(
        <div>Communication Preview:</div>
    )
}

export default React.memo(CommunicationPreview);