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
                <div className={classes.profile + ' content large'}>
                    <div className={classes['profile-pic']}>
                        <img src={profileImg} alt='profile image' />
                    </div>
                    <div className={classes.details}>
                        <div className={classes.content}>
                            <h1>Hi! I am <span>Prafull Sakpal</span></h1>
                            <h3>I'm a Front End Developer</h3>
                            <p> Based in Mumbai, India, I am passionate about creating engaging digital experiences.
                                As I work towards becoming a Full Stack Developer, I focus on crafting innovative solutions.
                                My projects highlight my ability to create user-friendly applications.
                            </p>
                            <Button>View Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}