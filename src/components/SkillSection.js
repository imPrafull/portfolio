import classes from './SkillSection.module.css'
import Section from './Section'
import Skill from './Skill'
import { SKILLS } from '../data/skills'

export default function SkillSection() {
    return (
        <Section id="skills">
            <div className={classes.container + ' content'}>
                <h1>Skills and Frameworks</h1>
                <p>In my professional experience, Angular and Ionic have been integral to my work across various workplaces, 
                    where I've leveraged these technologies to develop robust front-end solutions. 
                    Alongside these, I've actively explored other front-end technologies such as React and Svelte, 
                    broadening my toolkit for creating dynamic and responsive user interfaces. Additionally, 
                    I've delved into backend development using Node.js, where I've successfully built APIs to support scalable and efficient applications. This diverse exposure has not only strengthened my proficiency in both front-end and backend development but also equipped me with a comprehensive understanding of full-stack principles.
                </p>
                <div className={classes.skills}>
                    {SKILLS.map(skill => (<li key={skill.name}><Skill  skill={skill} /></li>))}
                </div>
            </div>
        </Section>
    )
}