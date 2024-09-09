import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleNavigation = (section) => {
        // Close the menu after click
        setMenuOpen(false);

        if (location.pathname !== '/') {
            // Navigate to the home page first if not already there
            navigate('/', { replace: true });
        }
      

        // Scroll to the section after ensuring the page is the main one
        setTimeout(() => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `#${section}`);
            }
        }, 0);
    };

     
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Mo Ali Resho</a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a onClick={() => handleNavigation('about')}>About</a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigation('experience')}>Experience</a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigation('projects')}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigation('contact')}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};