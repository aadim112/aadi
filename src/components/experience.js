import './experience.css';
import '../App.css';
import { useState } from 'react';

function Experience(){
    const [showReviews, setShowReviews] = useState(false);

    return(
        <div id='experience' className='experience'>
            <div className="band">
                <h2>Work Experience</h2>
            </div>
            <div className='experience-section'>
                <div className='job'>
                    <div className='company'>
                        <h3>TechJar Technologies Pvt Ltd</h3>
                        <h4>01/09/2025 - 01/12/2025</h4>
                    </div>
                    <h4>Full Stack Web Developer</h4>
                    <ul>
                        <li>Completed a 3-month internship, contributing to InterviewBot and VDR (Virtual Data Room) projects.</li>
                        <li>Developed React-based frontend features and supported backend development using Flask and Python libraries to build scalable APIs and application services.</li>
                        <li> Integrated AI solutions including STT/TTS technologies (ElevenLabs, Deepgram, and other leading models), and
                            conducted R&D to evaluate and recommend the most suitable speech models based on business requirements.</li>
                        <li>Participated in on-ground testing and validation of InterviewBot; implemented secure file handling, role-based access control (RBAC), 
                        audit logging, data visualization dashboards, and OCR-based automation workflows for structured data extraction.</li>
                        <li>Created a Streamlit application utilizing OCR and the Claude API to extract structured information from images of society register pages containing handwritten vehicle entries.</li>
                    </ul>
                    <div style={{display:'flex', gap:'5px',marginLeft:'10px'}}>
                        <a href='http://100.74.128.71:2283/share/pViUCac3-tZ_mNHGEX3BxCGIg36q30jismj3AdrGxSlZvfzQzL6G958mTEye-QpTy7M' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>Offer Letter</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>

                {/* <div className='break'></div> */}

                <div className='job'>
                    <div className='company'>
                        <h3>CSI-DYPIEMR</h3>
                        <h4>None</h4>
                    </div>
                    <h4>Joint Competitive Programming Head</h4>
                    <ul>
                        <li>Served as the Competitive Programming Head at CSI, where I was responsible for planning and managing all activities related to competitive programming. </li>
                        <li>Successfully organized and conducted a coding competition with participation from around 10 teams, where participants solved medium-level programming challenges using Python or C++.</li>
                        <li>Additionally, contributed to the club's broader initiatives by supporting and coordinating various events and activities.</li>
                    </ul>
                </div>

                <div className='job'>
                    <div className='company'>
                        <h3><span style={{color:'#1DBF73',fontWeight:'bold'}}>fiverr</span> - Freelancer</h3>
                        <h4>Since 2022</h4>
                    </div>
                    <h4>Graphics Designer</h4>
                    <div className='work-showcase-container'>
                        {/* <div className='work-showcase'>
                            <img src=''></img>
                        </div>
                        <div className='work-showcase'>
                            <img src=''></img>
                        </div> */}
                    </div>
                    <ul>
                        <li>Worked as a Freelance Graphic Designer on Fiverr, creating custom graphic designs including flyers, brochures, logos, social media posts, presentations, and other marketing materials for clients worldwide. Collaborated directly with clients to understand their requirements, delivered high-quality designs within deadlines, and maintained strong client satisfaction through clear communication and attention to detail</li>
                    </ul>
                    <div className='review'>
                        <button type='button' onClick={() => setShowReviews(!showReviews)} aria-expanded={showReviews} style={{display:'flex', gap:'10px',marginLeft:'10px',cursor:'pointer',background:'none',border:'none',padding:'0',alignItems:'center'}} >
                            <i className={`fa-solid ${showReviews ? 'fa-circle-minus' : 'fa-circle-plus'}`} style={{color: "#c5050c"}}></i>
                            <p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px',color:'#c5050c'}}>3/24 Reviews</p>
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
                        <a href='https://www.fiverr.com/mastervisualaid/do-business-informative-flyer-design' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>Visit Profile</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;