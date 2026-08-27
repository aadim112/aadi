import './Certifications.css'
import certificates from './certificate.json'

function Certifications(){
    return(
        <div className='Certifications'>
            <h2 className='certification-heading'>Certifications & Course</h2>
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
                    <p>Sabestian Rascasa</p>
                    <p>Info about </p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;