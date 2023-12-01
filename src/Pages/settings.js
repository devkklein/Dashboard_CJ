import React, { useState } from "react";
import Sidebar from "./Components/sidebar";
import Desktop from "./Components/desktop";
import "./Style/home.css";

function Settings(){
    return(
        <div >
            <Sidebar/>
            <Desktop/>
           
        </div>
    )
}

export default  Settings;