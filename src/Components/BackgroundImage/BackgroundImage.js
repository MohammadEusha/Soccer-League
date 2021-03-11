import React from 'react';
import backgroundImage from '../../Photo/background image 1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
const BackgroundImage = () => {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={backgroundImage} class="card-img" alt="..."></img>
                <div className="card-img-overlay">
                    <h1 className="card-title text-center fw-bolder text-white">S<FontAwesomeIcon icon={faFutbol} />ccer League</h1>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;