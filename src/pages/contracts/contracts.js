import React from "react";
import Header from "../../components/header/header";
import './contracts.css';

function Contracts()
{
    return (
        <div className="background">
            <Header />
            <div className="contract-container">
                <h1>Contract Me!</h1>
                <div className="contract-info">
                    <p>Email: naphatpromp@gmail.com</p>
                    <p>GitHub: <a href="https://github.com/oylsister">https://github.com/oylsister</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contracts;