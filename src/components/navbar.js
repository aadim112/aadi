import './navbar.css';

function Navbar() {
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
                <div className='info'>
                    <button className='resume'>Resume</button>
                    <p>|</p>
                    <p className='opt'>Work Experience</p>
                    <p className='opt'>Projects</p>
                    <p className='opt'>Certification & Courses</p>
                    <p className='opt'>Notebooks</p>
                    <p className='opt'>Activities</p>
                    <p className='opt'>About</p>
                </div>
            </div>
        </header>
    );
}

export default Navbar;