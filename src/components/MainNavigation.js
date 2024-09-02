import classes from './MainNavigation.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const links = [
    {
        label: 'About',
        section: 'about'
    },
    {
        label: 'Skills',
        section: 'skills'
    },
    {
        label: 'Experience',
        section: 'experience'
    },
    {
        label: 'Projects',
        section: 'projects'
    },
]

export default function MainNavigation({ vertical, onLinkClick }) {
    const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick()
        }
    }
    
    return (
        <nav className={`${classes['nav-container']} ${vertical ? classes.vertical : ''}`}>
            <ul>
                {links.map(link => (
                    <li key={link.label}>
                        <Link to={link.section} activeClass="active" smooth={true} duration={500} offset={-remToPx(3.5)} onClick={handleLinkClick}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

