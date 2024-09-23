import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Slider from './components/slider/slider';
import Header from './components/header/header';
import MyWorks from './pages/myworks/myworks';

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
