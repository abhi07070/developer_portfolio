import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 520) {
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    const iconNames = [faInstagram, faFacebook, faTwitter, faGithub, faLinkedin];
    return (
        <header>
            <nav className={isOpen ? 'mobile' : 'nav-header'}>
                <div className="logo">
                    <h2>Davinder Kumar</h2>
                </div>
                <div className="links">
                    {!isOpen ? (
                        iconNames.map((name) => (
                            <FontAwesomeIcon className="link" icon={name} key={name} />
                        ))
                    ) : (
                        iconNames.map((name) => (
                            <div className="link-name" key={name}>
                                <FontAwesomeIcon className="link" icon={name} />
                                {name.iconName}
                            </div>
                        ))
                    )}
                </div>
                <div className="hamburger">
                    {!isOpen ? (
                        <div className="open">
                            <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                    ) : (
                        <div className="close">
                            <svg onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;
