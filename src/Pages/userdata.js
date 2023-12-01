import React, { useState } from "react";
import Sidebar from "./Components/sidebar";
import Desktop from "./Components/desktop";
import "./Style/home.css";

function Userdata(){
    return(
        <div >
            <Sidebar/>
            <Desktop/>
        </div>
    )
}

export default  Userdata;