import './slider.css';
import '../../utils/redirect';
import Redirect from "../../utils/redirect";

const infoSlider = [ ZombieSharpInfo() ];

function Slider()
{
    return (
        <div className='slider-container'>
            
            {infoSlider[0]}
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

export default Slider;