import classes from './ProjectsSection.module.css'
import Project from './Project'
import Section from './Section'
import { PROJECTS } from '../data/projects'
import { MORE_PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
    
    return (
        <>
            <Section id="projects">
                <div className={classes.container}>
                    <h1>Projects</h1>
                    {/* <ul>
                        {PROJECTS.map(project => (
                            <Project project={project}/>
                        ))}
                    </ul> */}
                    <swiper-container style={
                            {
                                "--swiper-navigation-color": "var(--primary)", 
                                "--swiper-pagination-color": "var(--primary)",
                                "--swiper-navigation-size": "2rem",
                            }
                        } 
                        pagination-clickable="true" 
                        navigation="true" 
                        className="my-swiper"
                        keyboard-enabled="true"
                        keyboard-only-in-viewport="true"
                        loop="true"
                    >
                            {PROJECTS.map(project => (
                                <swiper-slide key={project.name}>
                                    <Project project={project}/>
                                </swiper-slide>
                            ))}
                    </swiper-container>
                </div>
                <Section id="projects">
                    <div className={classes.container + ' content very-large'}>
                        <ul className={classes['more-projects']}>
                            {MORE_PROJECTS.map(project => (
                                <ProjectCard key={project.name} project={project} />
                            ))}
                        </ul>
                    </div>
                    <p className={classes.footer}>Designed and Developed By Prafull Sakpal</p>
                </Section>
            </Section>
        </>
    )
}