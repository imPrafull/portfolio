import { register } from 'swiper/element/bundle';

import './App.css';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import MainNavigation from './components/MainNavigation';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';

// register Swiper custom elements
register();

function App() {
  return (
    <div className="App">
      {/* <MainNavigation /> */}
      <About />
      <SkillSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
