import classes from './Section.module.css'

export default function Section({children, ...props}) {
    return (
        <section className={classes.section} {...props}>
            {children}
        </section>
    )
}