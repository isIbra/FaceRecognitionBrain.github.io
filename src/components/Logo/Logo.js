import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import cranium from './cranium.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} alt="Logo" src={cranium}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;