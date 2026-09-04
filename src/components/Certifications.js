import './Certifications.css'
import certificates from './certificate.json'

function Certifications(){
    return(
        <div id='certifications' className='Certifications'>
            <h2 className='certification-heading'>Certifications & Courses</h2>
            <div className='certification-container'>
                {certificates.map((certificate) => (
                    <div className='certificate' key={certificate.id}>
                        <div className='certificate-metadata'>
                            <div className='certificare-overview'>
                                <div className='certificate-icon'>
                                    <img src={certificate.img}/>
                                </div>
                                <div className='certificate-info'>
                                    <p>{certificate.name}</p>
                                    <p>{certificate.issuer}</p>
                                    <p>{certificate.date}</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-turn-down" style={{color: "#c5050c"}}></i>
                        </div>
                        <div className='certificate-details'>
                            <p>{certificate.description}</p>
                            <a href={certificate.link} target='_blank' rel='noreferrer'>
                                View certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <p style={{fontFamily:'poppins',fontSize:'18px',backgroundColor:'#c50505',color:'white',padding:'0px 10px'}}>Books I will suggest to read</p>
            <div className='Book'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRenpNN3ec95dpJwEmKMyOLIv9gQy_jnoc4WLnqwJ2rA&s=10'></img>
                <div className='book-info'>
                    <h2>Build Your LLM from scratch</h2>
                    <p>Sebastian Raschka</p>
                    <p>Understood the GPT decoder-only model deeply. Also implemented a GPT-like model from scratch. The book contains all the small and required details about transformer architecture.</p>
                    <div style={{display:'flex', gap:'5px',marginLeft:'0px',marginTop:'10px'}}>
                        <a href='https://www.kaggle.com/code/aaditya112/creating-your-own-llm-from-0' style={{color:'#c5050c',}}><p style={{fontWeight:'500',fontFamily:'Inter',margin:'0px'}}>Checkout Model</p></a>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#c5050c"}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications;