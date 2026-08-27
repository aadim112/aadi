import './activities.css'

function activities(){
    return(
        <div id='activities' className='activities'>
            <h2 className='activities-heading'>activities</h2>
            <div className='newspaper'></div>
            <div className='activities-container'>

                <div className='activity'>
                    <div>
                        <h2>Building LLM from Scratch :)</h2>
                        <p>Read documentation on building an LLM from scratch using PyTorch and other libraries</p>
                        <div style={{display:'flex', gap:'5px',marginTop:'10px'}}>
                            <a href='https://aadim112.github.io/Building-Own-LLM/' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>Start Building</p></a>
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                        </div>
                    </div>
                    <div className='activity-poster'>
                        <img src='https://i.ibb.co/Rp1xXS0g/Screenshot-2026-08-26-013911.png'></img>
                    </div>
                </div>

                <div className='activity'>
                    <div className='activity-poster'>
                        <img src='https://media.licdn.com/dms/image/v2/D4D22AQHJ7K0QRsC1AA/feedshare-shrink_800/B4DZhnGuxrGgAo-/0/1754076476527?e=1788998400&v=beta&t=YjrJ1nSZsQ3f3WnugxT4n2imRm_UlnwvPFPcE9JecrI'></img>
                    </div>
                    <div>
                        <h2>Participated in a group for VIT Inno-Hackathon!</h2>
                        <p>We were among the top 200 teams out of 500+ registered teams. Presented a drone surveillance idea and prototype.</p>
                    </div>
                </div>

                <div className='activity'>
                    <div>
                        <h2>Demonstrated a web application at PCCOE GFG 24-hour Hackathon</h2>
                        <p>Presented a full-stack web application for hospitals, doctors, and patients. Also implemented the objectives given as part of the 24-hour Hackathon in the project.</p>
                    </div>
                    <div className='activity-poster'>
                        <img src='https://media.licdn.com/dms/image/v2/D4D22AQG1YajvtYR2Hg/feedshare-shrink_1280/B4DZWlafVGGcAk-/0/1742236940337?e=1788998400&v=beta&t=_kyinR11_170fcAiriWLw2W2u2cQNPTSeAkrZoBvy4o'></img>
                    </div>
                </div>

                <div className='activity'>
                    <div className='activity-poster'>
                        <img src='https://media.licdn.com/dms/image/v2/D4E22AQH8sqjcQY5nvQ/feedshare-shrink_1280/B4EZmzHVY5IkAs-/0/1759646669150?e=1788998400&v=beta&t=8s623wsNnjD0nWf3yY4Cj4ymhjoju51X5QIAv9YTemw'></img>
                    </div>
                    <div>
                        <h2>Presented VIRA Concept and semi-furnished model at Avishkar 2025</h2>
                        <p>Got the chance to represent the VIRA idea at the institute level at Avishkar.</p>
                    </div>
                </div>

                <div className='activity'>
                    <div>
                        <h2>Keep your Drinks ready!</h2>
                        <p>Watch video over working, and objectives of VIRA.</p>
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
                        <h2>Completed 2025 Arcade! Reached Novice Tier</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default activities;