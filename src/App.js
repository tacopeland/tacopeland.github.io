import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ProjectsPage from './pages/projects';
import SkillsPage from './pages/skills';
import ContactPage from './pages/contact';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
