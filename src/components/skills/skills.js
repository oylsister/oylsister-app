import React from "react";
import './skills.css';

function Skills()
{
    return (
        <div className="skill-body">
            <h1 className="skill-main">My Skills</h1>
            <div className="skill-list">
                <div className="skill-content">
                    <h1 className="skill-header">VFX skills</h1>
                    <li>3DS Max (Tyflow, PhoenixFD, Dynamic Simulation, VRay)</li>
                    <li>Maya</li>
                    <li>Blender</li>
                    <li>After Effects (Mocha Tracking, Green Screen)</li>
                    <li>Photoshop</li>
                </div>
                <div className="skill-content">
                    <h1 className="skill-header">Coding Language</h1>
                    <li>C#</li>
                    <li>HTML & CSS</li>
                    <li>Javascripts</li>
                    <li>MySQL</li>
                    <li>PHP</li>
                    <li>React.js</li>
                    <li>SourcePawn</li>
                </div>
            </div>
        </div>
    );
}

export default Skills