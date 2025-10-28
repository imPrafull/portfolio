
import classes from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {

  function openUrl(url) {
    window.open(url, '_blank');
  }

  return (
    <button className={classes.card} onClick={() => openUrl(project.demoLink)}>
      <div className={classes['card-image-container']}>
        {project.img ? (
          <img src={project.img} alt={project.name} className={classes['card-image']} />
        ) : (
          <div className={classes['card-image']}>Image placeholder</div>
        )}
        <span className={classes.label}>{project.skills[0]}</span>
      </div>
      <div className={classes['card-content']}>
        <h2 className={classes.headline}>{project.name}</h2>
        <p className={classes.content}>{project.description}</p>
      </div>
    </button>
  );
};
  
export default ProjectCard;