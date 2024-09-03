import React from "react";

const CarrierPreviewComponent = (props) =>{
    console.log("Carrier preview: ", props);
    return(
        <div>Preview Component:{props.name}</div>
    )

}

export default React.memo(CarrierPreviewComponent) ;