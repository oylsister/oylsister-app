import './slider.css';

function Button(props)
{
    return (
        <button className='zombie-button' onClick={props.link}>{props.message}</button>
    );
}

export default Button