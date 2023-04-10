import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
