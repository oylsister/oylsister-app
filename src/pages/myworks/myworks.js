import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/slider/button";
import Redirect from "../../utils/redirect";
import './myworks.css';

function MyWorks()
{
    return (
        <div className="background">
            <Header />
            <VFXWork />
            <ZombieSharoWork />
        </div>
    );
}

function VFXWork()
{
    return (
        <div className="work-container">
            <h1 className="work-section">Animation and VFX</h1>
            <div className="work-info">
                <h1 className="work-title">The Dust Animation Trailer</h1>
                <p className="work-description">An animation thesis for 2020 thesis, Innovative Digital Design, Faculty of Science and Technology, Thammasat University (Rangsit Campus) 
                    <br /><br /> Presented by:
                    <br /> &emsp; &#9679; Naphat Promphakping
                    <br /> &emsp; &#9679; Thepaksorn Sompoprungroj
                </p>
                <div className="work-video-container">
                    <iframe width="960" height="540" src="https://www.youtube.com/embed/Hny68Mws58g?si=I_z2IWD7TZkY1Twl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className="work-info">
                <h1 className="work-title">Dynamic Simulation Showreel</h1>
                <p className="work-description">All VFX and 3D Simulation 2021 showcase.</p>
                <div className="work-video-container">
                    <iframe width="960" height="540" src="https://www.youtube.com/embed/Pb9yZFWbo70?si=aYvFYlGzKqU9_7nA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

function ZombieSharoWork()
{
    return (
        <div className="work-container" style={{paddingTop: "20px"}}>
            <h1 className="work-section">Coding</h1>
            <div className="work-info">
                <h1 className="work-title">Zombie Sharp: Base Plugin</h1>
                <p className="work-description">
                    Zombie-Sharp is a plugin Zombie gamemode for Counter-Strike 2 referencing the features and functions from the previous SourcePawn Zombie:Reloaded plugin.
                    <br />The goal is publish open-source code and release a plugin which anyone can access and use for hosting custom game server.
                </p>
                <div className="bv-container">
                    <div className="work-video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/V_NfPW3Imhs?si=SVRVwO33BU_lR5dR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="work-video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/o6zPAx_hsHI?si=4U7F3jIn_2aBRQrC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="button-github">
                    <Button className="button-github" link={Redirect.ZombieSharpLink} message="View in github"/>
                </div>
            </div>

            <div className="work-info">
                <h1 className="work-title">Zombie Sharp: Stats website</h1>
                <p className="work-description">
                    A simple website showing player stats, collecting data from ZombieSharp plugin that you're hosting.
                    <br /> Special Contributor: <a target="_blank" href="https://github.com/SparkyCloudy">SparkyCloud</a>
                </p>
                <div className="button-github">
                    <Button className="button-github" link={Redirect.ZombieSharpStatsLink} message="View in github"/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;