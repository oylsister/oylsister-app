import React from "react";
import './header.css';

function Header()
{
    function RedirectToZombieSharp()
    {
        window.open("https://github.com/Oylsister/ZombieSharp", "_blank");
    }

    return (
        <div className="header">
            <div className="button-list">
                <button className="button-head">Home</button>
                <button className="button-head" onClick={RedirectToZombieSharp}>Zombie Sharp</button>
                <button className="button-head">My Works</button>
                <button className="button-head">Contract Me</button>
            </div>
        </div>
    );
}



export default Header;
