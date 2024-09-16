import {faInstagram, faFacebook, faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
export const Footer = () => {
    return (
        <div className="footer flex-container justify-center gap-3 w-100">
            <a href="https://www.instagram.com" target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faInstagram} style={{fontSize: '24px'}}/>
            </a>
            <a href="https://www.facebook.com" target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faFacebook} style={{fontSize: '24px'}}/>
            </a>
            <a href="https://www.twitter.com" target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faTwitter} style={{fontSize: '24px'}}/>
            </a>
            <a href="https://www.github.com" target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faGithub} style={{fontSize: '24px'}}/>
            </a>
            <a href="https://www.linkedin.com" target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faLinkedin} style={{fontSize: '24px'}}/>
            </a>
        </div>
    )
}