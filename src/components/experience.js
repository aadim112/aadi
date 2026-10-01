import './experience.css';
import '../App.css';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

function Experience(){
    const [showReviews, setShowReviews] = useState(false);
    const { language } = useLanguage();
    const japanese = language === 'ja';

    return(
        <div id='experience' className='experience'>
            <div className="band">
                <h2>{japanese ? '職務経験' : 'Work Experience'}</h2>
            </div>
            <div className='experience-section'>
                <div className='job'>
                    <div className='company'>
                        <h3>TechJar Technologies Pvt Ltd</h3>
                        <h4>01/09/2025 - 01/12/2025</h4>
                    </div>
                    <h4>{japanese ? 'フルスタックWeb開発者' : 'Full Stack Web Developer'}</h4>
                    <ul>
                        <li>{japanese ? '3か月間のインターンシップに参加し、InterviewBotとVDR（バーチャルデータルーム）の開発に貢献しました。' : 'Completed a 3-month internship, contributing to InterviewBot and VDR (Virtual Data Room) projects.'}</li>
                        <li>{japanese ? 'Reactによるフロントエンド機能を開発し、FlaskやPythonライブラリを用いたスケーラブルなAPIおよびアプリケーションサービスのバックエンド開発を支援しました。' : 'Developed React-based frontend features and supported backend development using Flask and Python libraries to build scalable APIs and application services.'}</li>
                        <li>{japanese ? 'ElevenLabsやDeepgramなどの音声認識・音声合成技術を含むAIソリューションを統合し、ビジネス要件に合う音声モデルを評価・提案する研究開発を行いました。' : 'Integrated AI solutions including STT/TTS technologies (ElevenLabs, Deepgram, and other leading models), and conducted R&D to evaluate and recommend suitable speech models based on business requirements.'}</li>
                        <li>{japanese ? 'InterviewBotの現地テストと検証に参加し、安全なファイル処理、ロールベースアクセス制御（RBAC）、監査ログ、データ可視化ダッシュボード、OCRによるデータ抽出の自動化を実装しました。' : 'Participated in on-ground testing and validation of InterviewBot; implemented secure file handling, role-based access control (RBAC), audit logging, data visualization dashboards, and OCR-based automation workflows for structured data extraction.'}</li>
                        <li>{japanese ? '手書きの車両記録を含む組合台帳の画像から、OCRとClaude APIで情報を抽出するStreamlitアプリを作成しました。' : 'Created a Streamlit application utilizing OCR and the Claude API to extract structured information from images of society register pages containing handwritten vehicle entries.'}</li>
                    </ul>
                    <div style={{display:'flex', gap:'5px',marginLeft:'10px'}}>
                        <a href='https://ibb.co/YFWHdwf5' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>{japanese ? '採用通知書' : 'Offer Letter'}</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>

                {/* <div className='break'></div> */}

                <div className='job'>
                    <div className='company'>
                        <h3>CSI-DYPIEMR</h3>
                        <h4>{japanese ? '記載なし' : 'None'}</h4>
                    </div>
                    <h4>{japanese ? '競技プログラミング共同責任者' : 'Joint Competitive Programming Head'}</h4>
                    <ul>
                        <li>{japanese ? 'CSIの競技プログラミング責任者として、関連する活動の企画と運営を担当しました。' : 'Served as the Competitive Programming Head at CSI, responsible for planning and managing competitive programming activities.'}</li>
                        <li>{japanese ? '約10チームが参加するコーディング大会を企画・開催し、PythonまたはC++を使った中級問題に取り組んでもらいました。' : 'Organized and conducted a coding competition with around 10 teams solving medium-level programming challenges using Python or C++.'}</li>
                        <li>{japanese ? 'クラブの幅広い取り組みにも参加し、さまざまなイベントや活動の運営を支援しました。' : "Contributed to the club's broader initiatives by supporting and coordinating various events and activities."}</li>
                    </ul>
                </div>

                <div className='job'>
                    <div className='company'>
                        <h3><span style={{color:'#1DBF73',fontWeight:'bold'}}>fiverr</span> - Freelancer</h3>
                        <h4>{japanese ? '2022年から' : 'Since 2022'}</h4>
                    </div>
                    <h4>{japanese ? 'グラフィックデザイナー' : 'Graphics Designer'}</h4>
                    <div className='work-showcase-container'>
                        {/* <div className='work-showcase'>
                            <img src=''></img>
                        </div>
                        <div className='work-showcase'>
                            <img src=''></img>
                        </div> */}
                    </div>
                    <ul>
                        <li>{japanese ? 'Fiverrでフリーランスのグラフィックデザイナーとして活動し、世界各地の依頼者向けにチラシ、パンフレット、ロゴ、SNS投稿、プレゼン資料などを制作しました。要望を丁寧に確認し、期限内に高品質なデザインを納品。明確な連絡と細部への配慮を通じて高い満足度につなげました。' : 'Worked as a Freelance Graphic Designer on Fiverr, creating custom designs including flyers, brochures, logos, social media posts, presentations, and other marketing materials for clients worldwide. Collaborated with clients, delivered quality designs on time, and maintained satisfaction through clear communication and attention to detail.'}</li>
                    </ul>
                    <div className='review'>
                        <button type='button' onClick={() => setShowReviews(!showReviews)} aria-expanded={showReviews} style={{display:'flex', gap:'10px',marginLeft:'10px',cursor:'pointer',background:'none',border:'none',padding:'0',alignItems:'center'}} >
                            <i className={`fa-solid ${showReviews ? 'fa-circle-minus' : 'fa-circle-plus'}`} style={{color: "#c5050c"}}></i>
                            <p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px',color:'#c5050c'}}>{japanese ? 'レビュー 3/24件' : '3/24 Reviews'}</p>
                        </button>
                        {showReviews && 
                            <div className='r'>
                                <div className='rr'>
                                    <p>paulianalara - 3 years ago</p>
                                    <p>"Amazing turnaround and response time. Quick with the edits and revisions. Will definitely use again in the future. Very easy to work with this seller. Highly recommend."</p>
                                </div>


                                <div className='rr'>
                                    <p>keshawnbacchus - 3 years ago</p>
                                    <p>"Gentlemen went above and beyond in their service. Very transparent and assured client's needs are met. Goes and changes details when needed and is creative. Will be using him again."</p>
                                </div>

                                <div className='rr'>
                                    <p>opson4 - 2 years ago</p>
                                    <p>"The seller is awesome, great attention to details and very good at what he does with lightening speed delivery......will recommend and work with his again. Thank you"</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div style={{display:'flex', gap:'5px',marginLeft:'10px'}}>
                        <a href='https://www.fiverr.com/mastervisualaid/do-business-informative-flyer-design' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>{japanese ? 'プロフィールを見る' : 'Visit Profile'}</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;