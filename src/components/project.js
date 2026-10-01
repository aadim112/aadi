import './project.css'
import { useState } from 'react'
import viraimg from '../assets/vira.jpg'
import projects from './projects.json'
import { useLanguage } from '../LanguageContext';


function Project(){
    const majorProjects = projects.filter((project) => project.major)
    const minorProjects = projects.filter((project) => !project.major)
    const [selectedProject, setSelectedProject] = useState(majorProjects[0])
    const { language } = useLanguage();
    const japanese = language === 'ja';
    const japaneseDescriptions = {
        vira: '自律型ドローンと監視カメラ網を連携させ、広域のリアルタイム監視、顔認識、群衆分析、異常検知を行うAI監視プラットフォームを構築しました。位置情報付きのインシデント通知、安全なホバリング区域の算出、迅速な脅威確認のための自律ドローン派遣を実現。複数ドローンのGPS追跡と地域別監視を支えるクラウド基盤も開発しました。',
        'nihongono-practice': 'JLPT N5を目指す初学者向けの日本語学習サイトです。ひらがな、カタカナ、語彙、文法、クイズ、練習問題などを提供し、インタラクティブな画面で段階的に学べます。',
        'pure-change': 'プロダクト設計、行動ロジック、セキュリティ設計、反復的な開発を通じて制作した、習慣づくりを支援するワークスペースです。継続記録と段階的な進捗の仕組みを用いて、望ましくない習慣から、ヨガ、瞑想、運動などの規律ある日課への移行を助けます。',
        medilog: 'Google OAuth認証と、医師・患者・スタッフごとのアクセス管理を備えた病院管理アプリです。予約、記録管理、リアルタイムのビデオ診療に対応しています。',
    };

    return(
        <div id='projects' className='project'>
            <div className="band">
                <h2>{japanese ? '主なプロジェクト' : 'Key Projects'}</h2>
            </div>
            <p style={{fontFamily: 'Inter'}}>{japanese ? 'すべてのプロジェクトは' : 'You can check out all of my projects on my '}<a href="https://github.com/aadim112" style={{textDecoration: 'none', color: '#c5050c'}} target="_blank" rel="noopener noreferrer">GitHub</a>{japanese ? 'のプロフィールをご覧ください。' : ' profile.'}</p>
            <span style={{fontFamily: 'poppins',fontWeight: '500',margin:'0px',color:'white',backgroundColor:'#c5050c',padding:'0px 5px',cursor:'pointer'}} onClick={() => setSelectedProject(majorProjects[0])}>{japanese ? '主要プロジェクト' : 'Major Projects'}</span>

            <div className='project-sections'>
                <div className='Major-Projects'>

                    <div className='prj'>
                        <div className='prj-img'>
                            <img src={selectedProject.img} alt={selectedProject.title}></img>
                        </div>
                        <a href={selectedProject.repository} style={{textDecoration:'none'}} target='_blank' rel='noopener noreferrer'>
                            <div style={{display:'flex',alignItems:'center',gap:'10px',cursor:'pointer',color:'#c5050c',fontWeight:'bold',fontSize:'20px'}}>
                                <i className="fa-solid fa-link fa" style={{color: "#c5050c"}}></i>
                                <p style={{margin:'0px'}}>{selectedProject.title}</p>
                            </div>
                        </a>
                        <div className='prj-info'>
                            <p>{selectedProject.date}</p>
                            <p>{japanese ? '使用技術：' : 'Technologies: '}{selectedProject.technologies}</p>
                        </div>
                        <div className='prj-description'>
                            <p>{japanese ? japaneseDescriptions[selectedProject.id] : selectedProject.description}</p>
                        </div>
                    </div>

                    <div className='break'></div>
                    
                </div>
                <div className='Minor-Projects'>
                    <span style={{fontFamily: 'poppins',fontWeight: '500',marginLeft:'5px',color:'white',backgroundColor:'#c5050c',padding:'0px 5px',cursor:'pointer',width:'50%'}}>{japanese ? 'ミニプロジェクト' : 'Mini Projects'}</span>
                    {minorProjects.map((project) => (
                        <button
                            className='mini-prj'
                            type='button'
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            aria-pressed={selectedProject.id === project.id}
                        >
                            <p>{project.date}</p>
                            <p>{project.title}</p>
                            <p>{japanese ? japaneseDescriptions[project.id] : project.description}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;