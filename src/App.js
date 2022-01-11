import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ProjectsPage from './pages/projects';
import SkillsPage from './pages/skills';
import ContactPage from './pages/contact';
import AnimatePage from './pages/animate';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<AnimatePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
