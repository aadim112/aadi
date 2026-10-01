import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Project from './components/project';
import Certifications from './components/Certifications';
import Activities from './components/activities';
import Notebook from './components/notebook';
import { useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <>
      <Navbar/>
      <div className='japanese-quote'>
        <span>努</span>
        <span>力</span>
        <span>は</span>
        <span>裏</span>
        <span>切</span>
        <span>ら</span>
        <span>な</span>
        <span>い</span>
      </div>
      <div className='main-container'>
        <About/>
        <Experience/>
        <Project/>
        <Certifications/>
        <Notebook/>
        <Activities/>
        <p style={{textAlign:'center',fontFamily:'Inter'}}>{language === 'ja' ? '職務経歴は以上です。ぜひ' : "Alright! that's all I am professionally. Let's connect on "}<span style={{}}><a href='https://www.linkedin.com/in/adityapatilm/' style={{fontWeight:'bold',color:'#c5050c'}}>LinkedIn</a></span>{language === 'ja' ? 'でつながりましょう。' : ''}</p>
        <p style={{textAlign:'center',fontFamily:'Inter',margin:'0px',fontWeight:'300',color:'grey'}}>aaditya.patil.m@gmail.com</p>
      </div>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
        <p>&copy; 2026 Aaditya M Patil . {language === 'ja' ? '無断転載を禁じます。' : 'All rights reserved.'}</p>
        <a href="/privacy" style={{color:'#c5050c'}}>{language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}</a>
      </footer>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
