import classes from './Shortcuts.module.css'
import Shortcut from './Shortcut'

import githubIcon from '../assets/shortcuts/github.svg';
import linkedInIcon from '../assets/shortcuts/linkedin.svg';

const SHORTCUTS = [
    {
        link: 'https://github.com/imPrafull',
        backgroundColor: '#0D1117',
        icon: githubIcon,
        label: 'Github',
    },
    {
        link: 'https://linkedin.com/in/prafullsakpal',
        backgroundColor: '#0A66C2',
        icon: linkedInIcon,
        label: 'Linkedin',
    },
]

export default function Shortcuts() {
    return (
        <div className={classes.shortcuts}>
            {SHORTCUTS.map((shortcut, index) => (
                <Shortcut
                key={index}
                link={shortcut.link}
                backgroundColor={shortcut.backgroundColor}
                icon={shortcut.icon}
                label={shortcut.label}
                />
            ))}
        </div>
    )
}