import './activities.css'
import { useLanguage } from '../LanguageContext';

function Activities(){
    const { language } = useLanguage();
    const japanese = language === 'ja';
    const activityCopy = japanese ? [
        ['LLMを一から構築 :)', 'PyTorchなどのライブラリを使ったLLMの構築方法をドキュメントで学びました。', '構築を始める'],
        ['VIT Inno-Hackathonにチームで参加！', '登録された500以上のチームのうち上位200チームに選ばれました。ドローン監視のアイデアとプロトタイプを発表しました。'],
        ['PCCOE GFG 24時間ハッカソンでWebアプリを発表', '病院、医師、患者向けのフルスタックWebアプリを発表し、ハッカソンの課題にも取り組みました。'],
        ['Avishkar 2025でVIRAの構想と試作モデルを発表', '研究機関レベルのAvishkarでVIRAのアイデアを発表する機会を得ました。'],
        ['飲み物を用意してご覧ください！', 'VIRAの仕組みと目的を紹介する動画です。'],
        ['2025 Arcadeを完了、Novice Tierに到達'],
    ] : [
        ['Building LLM from Scratch :)', 'Read documentation on building an LLM from scratch using PyTorch and other libraries', 'Start Building'],
        ['Participated in a group for VIT Inno-Hackathon!', 'We were among the top 200 teams out of 500+ registered teams. Presented a drone surveillance idea and prototype.'],
        ['Demonstrated a web application at PCCOE GFG 24-hour Hackathon', 'Presented a full-stack web application for hospitals, doctors, and patients. Also implemented the objectives given as part of the 24-hour Hackathon in the project.'],
        ['Presented VIRA Concept and semi-furnished model at Avishkar 2025', 'Got the chance to represent the VIRA idea at the institute level at Avishkar.'],
        ['Keep your Drinks ready!', 'Watch video over working, and objectives of VIRA.'],
        ['Completed 2025 Arcade! Reached Novice Tier'],
    ];
    return(
        <div id='activities' className='activities'>
            <h2 className='activities-heading'>{japanese ? '活動' : 'Activities'}</h2>
            <div className='newspaper'></div>
            <div className='activities-container'>

                <div className='activity'>
                    <div>
                        <h2>{activityCopy[0][0]}</h2>
                        <p>{activityCopy[0][1]}</p>
                        <div style={{display:'flex', gap:'5px',marginTop:'10px'}}>
                            <a href='https://aadim112.github.io/Building-Own-LLM/' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>{activityCopy[0][2]}</p></a>
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                        </div>
                    </div>
                    <div className='activity-poster'>
                        <img src='https://i.ibb.co/Rp1xXS0g/Screenshot-2026-08-26-013911.png'></img>
                    </div>
                </div>

                <div className='activity'>
                    <div className='activity-poster'>
                        <img src='https://ik.imagekit.io/r5iifod66/vit.jpg'></img>
                    </div>
                    <div>
                        <h2>{activityCopy[1][0]}</h2>
                        <p>{activityCopy[1][1]}</p>
                    </div>
                </div>

                <div className='activity'>
                    <div>
                        <h2>{activityCopy[2][0]}</h2>
                        <p>{activityCopy[2][1]}</p>
                    </div>
                    <div className='activity-poster'>
                        <img src='https://ik.imagekit.io/r5iifod66/pccoe.jpg'></img>
                    </div>
                </div>

                <div className='activity'>
                    <div className='activity-poster'>
                        <img src='https://ik.imagekit.io/r5iifod66/avishkar.jpg'></img>
                    </div>
                    <div>
                        <h2>{activityCopy[3][0]}</h2>
                        <p>{activityCopy[3][1]}</p>
                    </div>
                </div>

                <div className='activity'>
                    <div>
                        <h2>{activityCopy[4][0]}</h2>
                        <p>{activityCopy[4][1]}</p>
                    </div>
                    <div className='activity-poster'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uwrZw0P5A_c?si=dtn9Uv08JVzdmJhd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                

                <div className='activity'>
                    <div className='activity-poster'>
                        <img src='https://storage.googleapis.com/gweb-cloudblog-publish/images/GC_arcade_marketing_assets_blog_hero_image.max-2500x2500.png'></img>
                    </div>
                    <div>
                        <h2>{activityCopy[5][0]}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;