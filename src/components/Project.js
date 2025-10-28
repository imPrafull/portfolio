import classes from './Project.module.css'
import SkillChip from './SkillChip'
import Button from './Button'

export default function Project({ project }) {

    function openUrl(url) {
        window.open(url, '_blank');
    }

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
                    <div><Button onClick={() => openUrl(project.demoLink)}>Visit</Button></div>
                    <div><Button onClick={() => openUrl(project.githubLink)}>View Code</Button></div>
                </div>
            </div>
        </div>
    )
}