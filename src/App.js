import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Project from './components/project';
import Certifications from './components/Certifications';
import Activities from './components/activities';
import Notebook from './components/notebook';

function App() {
  return (
    <>
      <Navbar/>
      <div className='main-container'>
        <About/>
        <Experience/>
        <Project/>
        <Certifications/>
        <Notebook/>
        <Activities/>
      </div>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
        <p>&copy; 2026 Aaditya M Patil . All rights reserved.</p>
        <a href="/privacy" style={{color:'#c5050c'}}>Privacy Policy</a>
      </footer>
    </>
  );
}

export default App;
