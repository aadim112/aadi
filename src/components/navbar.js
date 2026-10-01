import './navbar.css';
import { useState } from 'react';
import resume from '../assets/resume.pdf';
import japaneseResume from '../assets/履歴書.pdf';
import { useLanguage } from '../LanguageContext';

function Navbar() {
    const { language, setLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);
    const closeResumeMenu = () => setResumeMenuOpen(false);

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
                    <div className='resume-dropdown'>
                        <button
                            className='resume'
                            type='button'
                            aria-expanded={resumeMenuOpen}
                            aria-haspopup='true'
                            onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                        >
                            {language === 'ja' ? '履歴書' : 'Resume'}
                        </button>
                        {resumeMenuOpen && (
                            <div className='resume-options'>
                                <a href={resume} download='Aaditya-Patil-Resume.pdf' onClick={closeResumeMenu}>{language === 'ja' ? '英語の履歴書' : 'English Resume'}</a>
                                <a href={japaneseResume} download='履歴書.pdf' onClick={closeResumeMenu}>{language === 'ja' ? '日本語の履歴書' : 'Japanese Resume'}</a>
                            </div>
                        )}
                    </div>
                    <button
                        className='language-button'
                        type='button'
                        aria-label={language === 'ja' ? 'Switch to English' : '日本語に切り替える'}
                        onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
                    >
                        {language === 'ja' ? 'English' : '日本語'}
                    </button>
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
                        <a className='opt' href='#experience' onClick={closeMenu}>{language === 'ja' ? '職務経験' : 'Work Experience'}</a>
                        <a className='opt' href='#projects' onClick={closeMenu}>{language === 'ja' ? 'プロジェクト' : 'Projects'}</a>
                        <a className='opt' href='#certifications' onClick={closeMenu}>{language === 'ja' ? '資格・講座' : 'Certification & Courses'}</a>
                        <a className='opt' href='#notebooks' onClick={closeMenu}>{language === 'ja' ? 'ノートブック' : 'Notebooks'}</a>
                        <a className='opt' href='#activities' onClick={closeMenu}>{language === 'ja' ? '活動' : 'Activities'}</a>
                        <a className='opt' href='#about' onClick={closeMenu}>{language === 'ja' ? '自己紹介' : 'About'}</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;