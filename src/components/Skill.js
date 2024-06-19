import classes from './Skill.module.css'

export default function Skill({ skill }) {
    return (
        <div className={classes.skill}>
            <img src={skill.img} alt={skill.name}></img>
            <h5>{skill.name}</h5>
        </div>
    )
}