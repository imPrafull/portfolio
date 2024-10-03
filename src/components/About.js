import classes from './About.module.css'
import Button from './Button'
import Section from './Section'
import profileImg from '../assets/profile-pic.jpg';

export default function About() {

    function openResume() {
        const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf'
        // const resumeUrl = 'https://drive.google.com/file/d/1WR-JkgMEflWxSZZvO6RiekCUBRq1IKbk/view?usp=drive_link'
        window.open(resumeUrl, '_blank');
    };

    return (
        <Section id="about">
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
                            <Button onClick={openResume}>View Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}