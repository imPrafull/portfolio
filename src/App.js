import './App.css';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import MainNavigation from './components/MainNavigation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* <MainNavigation /> */}
      <About />
      <Skills />
      <ExperienceSection />
    </div>
  );
}

export default App;
