import React from "react";
import './contract.css';
import Redirect from "../../utils/redirect";

const Contract = (props) =>
{
    return (
        <div className="contract-container">
            <div className="overlay"></div>
            <div className="contract-content">
                <h2>Contract Me!</h2>
                <div>
                    <p>Email: naphatpromp@gmail.com</p>
                    <div className="icon-link" onClick={Redirect.LinkedIdLink}>
                        <img src="/icon/linkedin_icon.png" alt="linkedin icon" />
                        <p>Linkedin</p>
                    </div>
                    <div className="icon-link" onClick={Redirect.RepositorLink}>
                        <img src="/icon/github_logo_icon.png" alt="repository icon"/>
                        <p>GitHub</p>
                    </div>
                </div>
                <button className="close-button" onClick={props.close}>Close</button>
            </div>
        </div>
    )   
}

export default Contract;