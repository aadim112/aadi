import './about.css'
import newspaper from '../assets/newspaper.png'

function about(){
    return(
        <div id='about' className='about'>
            <div className="top-margin" ></div>
            <div className='information'>
                <div className='left-info-section'>
                    <div className='hero-heading'>
                        <h2>Hello, I'm Aaditya</h2>
                        <div className="rotating-text">
                            <div className="rotating-track">
                                <span>(<i className="fa-solid fa-torii-gate" style={{ color: '#c5050c' }}></i>日本語 Learner )</span>
                                <span>(<i className="fa-solid fa-robot" style={{ color: '#c5050c' }}></i>Machine Learning Student )</span>
                                {/* <span><i className="fa-solid fa-torii-gate" style={{ color: 'rgb(250, 20, 0)' }}></i>JP Learner</span> */}
                            </div>
                        </div>
                    </div>
                    <p>I am a Software Engineering student specializing in Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Engineering, Management, and Research. </p>
                    <p>I have worked on various projects that have enhanced my machine learning skills, where I focused on applying core concepts, experimenting with different approaches, and developing solutions to real-world problems.</p>
                    <p>While web development has been an enjoyable medium for implementing my ideas, I am actively expanding my horizons by exploring diverse Python applications beyond web development. In addition to my technical pursuits, I am currently learning the Japanese language(JLPT N5 Completed).</p>
                </div>
                <div className='pf-section'>
                    <div className='pf'></div>
                </div>
            </div>
            <div className='tech-info'>
                <div className='tech-stack'>
                    <h3>I know them very well!</h3>
                    <div className='technologies'>
                        <p>Python</p>
                        <p>Pytorch</p>
                        <p>Flask</p>
                        <p>ReactJs</p>
                        <p>Pandas</p>
                        <p>Numpy</p>
                    </div>
                </div>
                <div className='tech-stack'>
                    <h3>Competitive Worlds!!</h3>
                    <div className='technologies'>
                        <a href='https://leetcode.com/u/aadi_m/' style={{textDecoration:'none'}}><i className="fa-brands fa-leetcode fa-lg" style={{color: "rgb(0, 0, 0)"}}></i><span style={{color:'#c5050c',fontFamily:'Inter',fontWeight:'500'}}>LeetCode</span></a>
                        <a href='https://codolio.com/profile/Aaditya' style={{textDecoration:'none',fontFamily:'Inter'}}><p style={{fontWeight:'bold',color:'black',margin:'0px'}}>Cod<span style={{color:'rgb(245 124 6)'}}>olio</span></p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;