import React from "react";
import error from "../assets/404.png"

const Error=()=>{

    return(
        <div style={{widht: "100%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", margin: "200px"}}>
            <img src={error}/>
        </div>
    )

};

export default Error;
   