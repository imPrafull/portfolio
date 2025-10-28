import classes from './SkillChip.module.css'

export default function SkillChip({ skill }) {
    return (
        <p className={classes['skill-chip']}>
            {skill}
        </p>
    )
}