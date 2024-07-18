import classes from './Project.module.css'
import { PROJECTS } from '../data/projects'
import SkillChip from './SkillChip'
import Button from './Button'

export default function Project({ project }) {
    return (
        <div className={classes.project}>
            <img className={classes['project-img']} src={project.img} alt={project.name}></img>
            <div className={project.details}>
                <h2>{project.name}</h2>
                <img className={classes['project-img-medium']} src={project.img} alt={project.name}></img>
                <ul>
                    {project.skills.map(skill => (
                        <li key={skill}><SkillChip skill={skill} /></li>
                    ))}
                </ul>
                <p>
                    {project.description}
                </p>
                <div className={classes.actions}>
                    <div><Button>Visit</Button></div>
                    <div><Button>View Code</Button></div>
                </div>
            </div>
        </div>
    )
}