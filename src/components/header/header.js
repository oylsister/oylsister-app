import React from "react";
import './header.css';
import Redirect from "../../utils/redirect";
import { Link } from "react-router-dom";


function Header()
{
    return (
        <div className="header">
            <div className="button-bar">
                <div className="button-all">
                    <button className="button-head"><Link to="/">Home</Link></button>
                    <button className="button-head" onClick={Redirect.ZombieSharpLink}>Zombie Sharp</button>
                    <button className="button-head">My Works</button>
                    <button className="button-head"><Link to="/contract">Contract Me</Link></button>
                </div>
                <div className="dropdown-container">
                    <button className="button-dropdown">Menu</button>
                    <div className="dropdown-content">
                        <button className="button-head">Home</button>
                        <button className="button-head" onClick={Redirect.ZombieSharpLink}>Zombie Sharp</button>
                        <button className="button-head">My Works</button>
                        <button className="button-head">Contract Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
