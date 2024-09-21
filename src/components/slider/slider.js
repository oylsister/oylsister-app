import './slider.css';
import '../../utils/redirect';
import Redirect from "../../utils/redirect";
import { useState, useEffect, React } from 'react';

const infoSlider = [ 
    {
        func: ZombieSharpInfo(),
        image: "/slider/zombiesharp.png"
    },
    {
        func: JammingInfo(),
        image: "/slider/jamming_op.png"
    },
    {
        func: GitHubInfo(),
        image: "/slider/vswindows_op.png"
    } 
];

function Slider()
{
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrectSlide] = useState(infoSlider[0].func);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if(slideDone) {
            setSlideDone(false);
            setTimeID (
                setTimeout(() => {

                    //console.log(timeID);

                    if(activeIndex >= infoSlider.length - 1)
                        setActiveIndex(0);
            
                    else
                        setActiveIndex(activeIndex + 1);
            
            
                    setInfoData(infoSlider[activeIndex]);
                    setSlideDone(true);
                }, 5000)
            );
        }
    }, [slideDone, activeIndex]);

    const AutoPlayStop = () => {
        console.log("They're Stop")
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };
    
    const AutoPlayStart = () => {
        console.log("They're start")
        if (!slideDone) {
            setSlideDone(true);
        }
    };


    const nextSlider = () => {
        setActiveIndex((value) => {
            if(value >= infoSlider.length - 1)
                return 0;
            else 
                return value + 1;
        });
        setInfoData(infoSlider[activeIndex]);
        clearTimeout(timeID);
        setSlideDone(false);
    };

    const prevSilder = () => {
        setActiveIndex((value) => {
            if(value <= 0)
                return infoSlider.length - 1;
            else 
                return value - 1;
        });
        setInfoData(infoSlider[activeIndex]);
        clearTimeout(timeID);
        setSlideDone(false);
    };

    function setInfoData(index)
    {
        let sliderBG = document.getElementById("sliderBG");

        if(sliderBG !== null)
        {
            sliderBG.style.backgroundImage = `url(${index.image})`;
            setCurrectSlide(index.func);
        }
    }

    return (
        <div className="slider-container" onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart} id="sliderBG">
            <button className='slider-btn-previous' onClick={(e) => {prevSilder();}}>&#8249;</button>
            {currentSlide}
            <button className='slider-btn-next' onClick={(e) => {nextSlider();}}>&#8250;</button>
        </div>
    );
}

function ZombieSharpInfo()
{
    return (
        <div className='slider-info'>
            <div className='zombie-info-container'>
                <h1 className='zombie-header'>ZombieSharp</h1>
                <p className='zombie-para'>Bringing you to one of the most amazing gamemode of Counter-Strike known as <br /> "Zombie Mode". Now available for free!</p>
                <div className='zombie-button-list'>
                    <button className='zombie-button' onClick={Redirect.ZombieSharpLink}>View in github</button>
                </div>
            </div>
        </div>
    );
}

function JammingInfo()
{
    return (
        <div className='slider-info'>
            <div className='zombie-info-container'>
                <h1 className='zombie-header'>Jamming</h1>
                <p className='zombie-para'>An incredible app that you can search and add song or music into your playlist with ease And saving them into your Spotify account!</p>
                <div className='zombie-button-list'>
                    <button className='zombie-button' onClick={Redirect.JammingLink}>View in github</button>
                </div>
            </div>
        </div>
    );
}

function GitHubInfo()
{   
    return (
        <div className='slider-info'>
            <div className='github-info-container'>
                <h1 className='github-header'>Looking for more?</h1>
                <p className='github-para'>I have written many SourcePawn scripts and other C# plugin for Counter-Strike and many more. Checking out my repositories and find the one you're looking for!</p>
                <div className='github-button-list'>
                    <button className='github-button' onClick={Redirect.RepositorLink}>Visit GitHub</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;