import classes from './Shortcut.module.css'

export default function Shortcut({ link, backgroundColor, icon, label }) {
    function handleClick() {
        window.open(link, '_blank')
    }

    return (
        <a href='/#' onClick={handleClick}>
            <div className={classes['shortcut-btn']} style={{ backgroundColor }}>
                <div className={classes.icon} style={{ backgroundImage: `url(${icon})` }}></div>
                <p className={classes.label}>{label}</p>
            </div>
        </a>
    );
};

