import classes from './MainNavigation.module.css'

const links = [
    {
        label: 'About',
        section: '#about'
    },
    {
        label: 'Skills',
        section: '#skills'
    },
    {
        label: 'Experience',
        section: '#experience'
    },
    {
        label: 'Projects',
        section: '#projects'
    },
]

export default function MainNavigation({ style }) {
    return (
        <nav className={classes['nav-container']} style={style}>
            <ul>
                {links.map(link => (
                    <li key={link.label}>
                        <a href={link.section}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

