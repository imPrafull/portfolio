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

export default function MainNavigation({ vertical }) {
    return (
        <nav className={`${classes['nav-container']} ${vertical ? classes.vertical : ''}`}>
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

