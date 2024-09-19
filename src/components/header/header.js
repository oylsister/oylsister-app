import React from "react";
import './header.css';
import Redirect from "../../utils/redirect";


function Header()
{
    return (
        <div className="header">
            <div className="button-bar">
                <div className="button-all">
                    <button className="button-head">Home</button>
                    <button className="button-head" onClick={Redirect.ZombieSharpLink}>Zombie Sharp</button>
                    <button className="button-head">My Works</button>
                    <button className="button-head">Contract Me</button>
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
