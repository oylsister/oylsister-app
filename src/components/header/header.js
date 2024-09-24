import { useState, React } from "react";
import './header.css';
import Redirect from "../../utils/redirect";
import Contract from "../contract/contract";
import { Link } from "react-router-dom";


function Header()
{
    const [showInfo, setShowInfo] = useState(false);
    const [smallMenu, setSmallMenu] = useState(false);

    const toggleModal = () => {
        setShowInfo(!showInfo);
    };

    const showSmallMenu = () => {
        setSmallMenu(true);
    }

    const stopSmallMenu = () => {
        setSmallMenu(false);
    }

    return (
        <div className="header">
            { showInfo && <Contract close={toggleModal}/> }
            <div className="button-bar">
                <div className="button-all">
                    <button className="button-head"><Link to="/">Home</Link></button>
                    <button className="button-head" onClick={Redirect.ZombieSharpLink}>Zombie Sharp</button>
                    <button className="button-head"><Link to="/myworks">My Works</Link></button>
                    <button className="button-head" onClick={toggleModal}>Contract Me</button>
                </div>
                <div className="dropdown-container" onMouseEnter={showSmallMenu} onMouseLeave={stopSmallMenu}>
                    <button className="button-dropdown">Menu</button>

                    { smallMenu && (
                        <div className="dropdown-content">
                            <button className="button-head"><Link to="/">Home</Link></button>
                            <button className="button-head" onClick={Redirect.ZombieSharpLink}>Zombie Sharp</button>
                            <button className="button-head"><Link to="/myworks">My Works</Link></button>
                            <button className="button-head" onClick={toggleModal}>Contract Me</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
