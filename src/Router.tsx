import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Formation from './components/pages/Formation';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificaciones" element={<Formation />} />
            <Route path='/proyectos' element={<Projects />} />
            <Route path='/experiencia' element={<Experience />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;