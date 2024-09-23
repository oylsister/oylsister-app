import './App.css';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Slider from './components/slider/slider';
import Contract from './components/contract/contract';

function App() {
  return (
    <div className="App">
      <Intro />
      <Slider />
      <Skills />
    </div>
  );
}

export default App;
