import './about.css'
import newspaper from '../assets/newspaper.png'
import { useLanguage } from '../LanguageContext';

function About(){
    const { language } = useLanguage();
    const japanese = language === 'ja';
    return(
        <div id='about' className='about'>
            <div className="top-margin" ></div>
            <div className='information'>
                <div className='left-info-section'>
                    <div className='hero-heading'>
                        <h2>{japanese ? 'こんにちは、Aadityaです' : "Hello, I'm Aaditya"}</h2>
                        <div className="rotating-text">
                            <div className="rotating-track">
                                <span>(<i className="fa-solid fa-torii-gate" style={{ color: '#c5050c' }}></i>{japanese ? '日本語学習者' : '日本語 Learner'} )</span>
                                <span>(<i className="fa-solid fa-robot" style={{ color: '#c5050c' }}></i>{japanese ? '機械学習を学ぶ学生' : 'Machine Learning Student'} )</span>
                                {/* <span><i className="fa-solid fa-torii-gate" style={{ color: 'rgb(250, 20, 0)' }}></i>JP Learner</span> */}
                            </div>
                        </div>
                    </div>
                    <p>{japanese ? 'Dr. D. Y. Patil Institute of Engineering, Management, and Researchで人工知能とデータサイエンスを専攻するソフトウェア工学の学生です。' : 'I am a Software Engineering student specializing in Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Engineering, Management, and Research.'}</p>
                    <p>{japanese ? '機械学習のスキルを高めるさまざまなプロジェクトに取り組み、基礎概念の応用や手法の検証を通じて、実社会の課題を解決する仕組みを開発してきました。' : 'I have worked on various projects that have enhanced my machine learning skills, where I focused on applying core concepts, experimenting with different approaches, and developing solutions to real-world problems.'}</p>
                    <p>{japanese ? 'アイデアを形にする手段としてWeb開発を楽しみながら、Web以外のPython活用にも取り組んでいます。また、日本語を学習中です（JLPT N5合格）。' : 'While web development has been an enjoyable medium for implementing my ideas, I am actively expanding my horizons by exploring diverse Python applications beyond web development. In addition to my technical pursuits, I am currently learning the Japanese language (JLPT N5 completed).'}</p>
                </div>
                <div className='pf-section'>
                    <div className='pf'></div>
                </div>
            </div>
            <div className='tech-info'>
                <div className='tech-stack'>
                    <h3>{japanese ? '得意な技術' : 'I know them very well!'}</h3>
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
                    <h3>{japanese ? '競技プログラミング' : 'Competitive Worlds!!'}</h3>
                    <div className='technologies'>
                        <a href='https://leetcode.com/u/aadi_m/' style={{textDecoration:'none'}}><i className="fa-brands fa-leetcode fa-lg" style={{color: "rgb(0, 0, 0)"}}></i><span style={{color:'#c5050c',fontFamily:'Inter',fontWeight:'500'}}>LeetCode</span></a>
                        <a href='https://codolio.com/profile/Aaditya' style={{textDecoration:'none',fontFamily:'Inter'}}><p style={{fontWeight:'bold',color:'black',margin:'0px'}}>Cod<span style={{color:'rgb(245 124 6)'}}>olio</span></p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;