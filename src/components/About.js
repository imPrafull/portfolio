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
                            <p> Based in Mumbai, India, I enjoy building digital experiences that are simple, useful, and engaging. I like finding new ways to solve problems and create smooth, user-friendly applications. I'm also growing my skills across the full stack to build better products from start to finish.
                            </p>
                            <Button onClick={openResume}>View Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}