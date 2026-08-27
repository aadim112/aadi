import './project.css'
import { useState } from 'react'
import viraimg from '../assets/vira.jpg'
import projects from './projects.json'


function Project(){
    const majorProjects = projects.filter((project) => project.major)
    const minorProjects = projects.filter((project) => !project.major)
    const [selectedProject, setSelectedProject] = useState(majorProjects[0])

    return(
        <div className='project'>
            <div className="band">
                <h2>Key Projects</h2>
            </div>
            <p style={{fontFamily: 'Inter'}}>You can check out all of my projects on my <a href="https://github.com/aadim112" style={{textDecoration: 'none', color: '#c5050c'}} target="_blank" rel="noopener noreferrer">GitHub</a> profile.</p>
            <span style={{fontFamily: 'poppins',fontWeight: '500',margin:'0px',color:'white',backgroundColor:'#c5050c',padding:'0px 5px',cursor:'pointer'}} onClick={() => setSelectedProject(majorProjects[0])}>Major Projects</span>

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
                            <p>Technologies : {selectedProject.technologies}</p>
                        </div>
                        <div className='prj-description'>
                            <p>{selectedProject.description}</p>
                        </div>
                    </div>

                    <div className='break'></div>
                    
                </div>
                <div className='Minor-Projects'>
                    <span style={{fontFamily: 'poppins',fontWeight: '500',marginLeft:'5px',color:'white',backgroundColor:'#c5050c',padding:'0px 5px',cursor:'pointer',width:'50%'}}>Mini Projects</span>
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
                            <p>{project.description}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;