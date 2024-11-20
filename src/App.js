import { register } from 'swiper/element/bundle';

import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import MainNavigation from './components/MainNavigation';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import Shortcuts from './components/Shortcuts';

// register Swiper custom elements
register();

function App() {
  return (
    <div className="App">
      <Shortcuts />
      <MainNavigation />
      <About />
      <SkillSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
