import { register } from 'swiper/element/bundle';
import { useEffect, useState } from 'react';

import classes from './App.module.css'
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import MainNavigation from './components/MainNavigation';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';

// register Swiper custom elements
register();

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = document.getElementById('about').offsetHeight;
      if (window.scrollY >= firstSectionHeight) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`${classes['nav-container']} ${showNav ? classes['show'] : ''}`}>
        <MainNavigation />
      </div>
      <About />
      <SkillSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
