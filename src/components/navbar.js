import './navbar.css';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return(
        <header>
            <div className="container">
                <div className="info">
                    <p style={{fontSize:'24px',fontWeight:'400',margin:'0px',color:'#c5050c'}}>Aaditya <span style={{fontSize:'24px',fontWeight:'400',margin:'0px',color:'black'}}>M P.</span></p>
                    <a href="mailto:your@email.com"><i className="fa-solid fa-envelope fa-lg" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
                    <a href="https://www.linkedin.com/in/adityapatilm/"><i className="fa-brands fa-linkedin fa-lg" style={{color: 'rgb(0, 0, 0)'}}></i></a>
                    <a href="https://github.com/aadim112"><i className="fa-brands fa-square-github fa-lg" style={{color: 'rgb(0, 0, 0)'}}></i></a>
                    <a href="https://www.kaggle.com/aaditya112"><i className="fa-brands fa-kaggle fa-lg" style={{color: 'rgb(0, 0, 0)'}}></i></a>
                </div>
                <div className='info nav-row'>
                    <a className='resume' href='/resume.pdf' download='Aaditya-MP-Resume.pdf'>Resume</a>
                    <button
                        className='menu-button'
                        type='button'
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                    </button>
                    <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
                        <p>|</p>
                        <a className='opt' href='#experience' onClick={closeMenu}>Work Experience</a>
                        <a className='opt' href='#projects' onClick={closeMenu}>Projects</a>
                        <a className='opt' href='#certifications' onClick={closeMenu}>Certification & Courses</a>
                        <a className='opt' href='#notebooks' onClick={closeMenu}>Notebooks</a>
                        <a className='opt' href='#activities' onClick={closeMenu}>Activities</a>
                        <a className='opt' href='#about' onClick={closeMenu}>About</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;