import './slider.css';
import '../../utils/redirect';
import Redirect from "../../utils/redirect";
import { useState, useEffect, React } from 'react';

const infoSlider = [ ZombieSharpInfo(), JammingInfo() ];

const sildeImage = [ 
    "http://localhost:3000/static/media/zombie-sharp.70a46b06867f90b0b305.jpg",
    "http://localhost:3000/static/media/vs2022_new.675cd6335fea1a6aa234.png"
 ];

function Slider()
{
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrectSlide] = useState(infoSlider[0]);

    setTimeout(() => {
        if(activeIndex >= sildeImage.length - 1)
            setActiveIndex(0);

        else
            setActiveIndex(activeIndex + 1);

        let sliderBG = document.getElementById("sliderBG");
        sliderBG.style.backgroundImage = `url("${sildeImage[activeIndex]}")`;
        setCurrectSlide(infoSlider[activeIndex]);

    }, 5000);

    return (
        <div className="slider-container" id="sliderBG">
            {currentSlide}
        </div>
    );
}

function ZombieSharpInfo()
{
    return (
        <div className='zombie-info'>
            <div className='zombie-info-container'>
                <h1 className='zombie-header'>ZombieSharp</h1>
                <p className='zombie-para'>Bringing you to one of the most amazing gamemode of Counter-Strike known as <br /> "Zombie Mode". Now available for free!</p>
                <div className='zombie-button-list'>
                    <button className='zombie-button' id='github' onClick={Redirect.ZombieSharpLink}>View in github</button>
                    <button className='zombie-button' id='more'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

function JammingInfo()
{
    return (
        <div className='zombie-info'>
            <div className='zombie-info-container'>
                <h1 className='zombie-header'>Jamming</h1>
                <p className='zombie-para'>An incredible app letting you to search and add song or music into your playlist with ease.</p>
                <div className='zombie-button-list'>
                    <button className='zombie-button' id='github' onClick={Redirect.ZombieSharpLink}>View in github</button>
                    <button className='zombie-button' id='more'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;