
import classes from './ProjectCard.module.css'
import SkillChip from './SkillChip';

const ProjectCard = ({ project }) => {
    return (
      <a className={classes['project-card']}>
        <h4 className={classes['project-title']}>
            {project.name}
        </h4>
        <p className={classes['project-description']}>
          {project.description}
        </p>
        <ul className={classes['project-chips']}>
            {project.skills.map(skill => (
                <li key={skill}><SkillChip skill={skill} /></li>
            ))}
        </ul>
      </a>
    );
  };
  
  export default ProjectCard;