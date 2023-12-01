import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/home.css';
import { sidebarData } from './sidebarData';
import Logo from "../Pictures/logo.png"



function Sidebar() {
    const navigate = useNavigate();
   
    return (
        <div className='sidebar'>
            <div onClick={()=>navigate("/login")}>
            <img src={Logo}></img>
            </div>
            <ul className='sidebarList'>
                {sidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className='row'
                            id={window.location.pathname == val.link ? "active": ""}
                            onClick={() => { navigate(val.link) }}>
                            <div id='icon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                        </li>

                    );
                })}
            </ul>

        </div>
    )
}

export default Sidebar