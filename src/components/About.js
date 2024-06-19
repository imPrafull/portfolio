import classes from './About.module.css'
import Button from './Button'
import Section from './Section'

import profileImg from '../assets/profile-pic.jpg';
import MainNavigation from './MainNavigation';

const mainNavStyle = {
    position: 'absolute',
    top: '5%',
    right: '8%'
}

export default function About() {
    return (
        <Section id="about">
            <MainNavigation style={mainNavStyle}/>
            <div className={classes.container}>
                <div className={classes.profile + ' content'}>
                    <div className={classes['profile-pic']}>
                        <img src={profileImg} alt='profile image' />
                    </div>
                    <div className={classes.details}>
                        <div className={classes.content}>
                            <h1>Hi! I am <span>Prafull Sakpal</span></h1>
                            <h3>I'm a Front End Developer</h3>
                            <p>Welcome to my portfolio! I am a passionate Front End Developer aiming to become a Full Stack Developer.
                                I have a keen interest in creating innovative and user-friendly apps.
                                My projects highlight my ability to create engaging digital experiences.
                            </p>
                            <Button>View Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}