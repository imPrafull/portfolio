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
                        <img src={profileImg} alt='profile' />
                    </div>
                    <div className={classes.details}>
                        <div className={classes.content}>
                            <h1>Hi! I am <span>Prafull Sakpal</span></h1>
                            <h3>I'm a Software Developer</h3>
                            <p> Based in Mumbai, India, with over 5 years of experience building responsive web and mobile applications. I specialize in Angular, React, Node.js, Ionic and MongoDB, building fast, reliable, and user-focused products. I am focused on designing and delivering seamless end-to-end solutions.
                            </p>
                            <Button onClick={openResume}>View Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}