import React, { useState } from "react";
import Sidebar from "./Components/sidebar";
import Desktop from "./Components/desktop";
import Usercount from "./Components/usercount";


function Home(){
    return(
        <div className="container" >
            <Sidebar/>
            <Desktop/>
            <Usercount/>

        </div>
    )
}

export default  Home;