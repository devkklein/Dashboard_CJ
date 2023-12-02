import React, { useState } from "react";
import Sidebar from "./Components/sidebar";
import Desktop from "./Components/desktop";
import Table from "./Components/table";
import "./Style/home.css";

function Userdata(){
    return(
        <div >
            <Sidebar/>
            <Desktop/>
            <Table/>
        </div>
    )
}

export default  Userdata;