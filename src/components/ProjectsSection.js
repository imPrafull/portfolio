import classes from './ProjectsSection.module.css'
import Project from './Project'
import Section from './Section'
import { PROJECTS } from '../data/projects'
import { MORE_PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'

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
            <div className={classes.container + ' content very-large'}>
            <div className={classes['more-projects']}>
                {MORE_PROJECTS.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
            </div>
            <p className={classes.footer}>Designed and Developed By Prafull Sakpal</p>
        </Section>
    )
}