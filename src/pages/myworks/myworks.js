import React from "react";
import Header from "../../components/header/header";
import './myworks.css';

function MyWorks()
{
    return (
        <div className="background">
            <Header />
            {<VFXWork />}
        </div>
    );
}

function VFXWork()
{
    return (
        <div className="work-container">
            <h1>Animation and VFX</h1>
            <div>
                <h1>The Dust Animation Trailer</h1>
                <p>An animation thesis </p>
            </div>
        </div>
    );
}

export default MyWorks;