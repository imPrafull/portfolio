import classes from './ProjectsSection.module.css'
import Project from './Project'
import Section from './Section'
import { PROJECTS } from '../data/projects'

export default function ProjectsSection() {
    
    return (
        <Section id="projects">
            <div className={classes.container + ' content very-large'}>
                <h1>Projects</h1>
                {/* <ul>
                    {PROJECTS.map(project => (
                        <Project project={project}/>
                    ))}
                </ul> */}
                <swiper-container style={
                        {
                        "--swiper-navigation-color": "#fff", 
                        "--swiper-pagination-color": "#fff"
                        }
                    } 
                    pagination-clickable="true" 
                    navigation="true" 
                    className="mySwiper">
                        {PROJECTS.map(project => (
                            <swiper-slide key={project.name}>
                                <Project project={project}/>
                            </swiper-slide>
                        ))}
                </swiper-container>
            </div>
        </Section>
    )
}