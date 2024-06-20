import classes from './ExperienceSection.module.css'
import Section from './Section'
import { EXPERIENCES } from '../data/experiences'
import Experience from './Experience'

export default function ExperienceSection() {
    return (
      <Section id="experience">
        <div className={classes.container + " content"}>
          <h1>Experience</h1>
          <ul className={classes.experience}>
            {EXPERIENCES.map((exp) => (
              <li key={exp.name}>
                <Experience experience={exp} />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
}