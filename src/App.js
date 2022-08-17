import './App.css';
import Navigation from './Sections/Navigation';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Agent from './Sections/Agent';
import Press from './Sections/Press';
import Featured from './Sections/Featured';
import Slideshow from './Sections/Slideshow';
import Contact from './Sections/Contact';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Agent />
      <Press />
      <Featured />
      <Slideshow />
      <Contact />
    </div>
  );
}

export default App;
