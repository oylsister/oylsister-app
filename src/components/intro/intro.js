import Header from "../header/header";
import React from "react";
import './intro.css'
import video from '../../video/ZriotFull.mp4';


function Intro()
{
    return (
        <div className="intro-body">
            <Header />
            <video src={video} autoPlay loop muted className="zriot"></video>
            <div className="intro-content">
                <h1 className="big-name">About me</h1>
                <div className="intro">My name is James Naphat Promphakping aka Oylsister.
                        I'm Ex-VFX-Artist who interest in programming and coding and now working on to become developer.
                    Previously I have contributed with many Counter-Strike Zombie Escape Community helping them to setup gamemode and providing support with 
                    custom plugins and scripts. 
                </div>
            </div>
        </div>
    );
}

export default Intro;