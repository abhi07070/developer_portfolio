import './About.css'
import desktop from '../../Images/desktop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../components/FontSkills';
const About = () => {
    return (
        <div className='section-lg'>
            <div className="container">
                <div className="about-container">
                    <h1 className='h1'>What I Do</h1>
                    <p className='lead'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <h3 className='h3'>Full Stack Development</h3>
                    <div className="skills-wrapper">
                        <img src={desktop} alt="" />
                        <div className='skills'>
                            <div className="fontskills">
                                {skills.map((skill) => (
                                    <FontAwesomeIcon className='font-skills' icon={skill.icon} title={skill.name} style={{ color: skill.color }} />
                                ))}
                            </div>
                            <p>⚡ Building responsive Single-Page-Websites in React.js</p>
                            <p>⚡ Building responsive static websites using React.js</p>
                            <p>⚡ Building RESTful APIs using NodeJs & ExpressJs Frameworks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
