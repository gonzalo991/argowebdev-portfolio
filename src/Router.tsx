import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Abilities from './components/pages/Abilities';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
import Videos from './components/pages/Videos';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/videos' element={<Videos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;