import classes from './Experience.module.css'

export default function Experience({ experience }) {
    return (
        <div className={classes.experience}>
            <p className={classes.time}>{experience.time}</p>
            <div className={classes.detail}>
                <h3>{experience.name}</h3>
                <h4>{experience.position}</h4>
                <p className={classes['time-mobile']}>{experience.time}</p>
                <p className={classes.description}>{experience.description}</p>
            </div>
        </div>
    )
}