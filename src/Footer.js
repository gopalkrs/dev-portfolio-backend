import React from 'react';
import './styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = ()=>{
    return(
        <div className='footer'>
            <p>Made with &#128187; by Gopal Choudhary</p>
            <div>
                <i className="fab fa-github social-media-links"></i>
                <i className="fab fa-linkedin-in social-media-links"></i>
                <FontAwesomeIcon className = 'social-media-links' icon={faEnvelope} />
            </div>
        </div>
    );
};

export default Footer;