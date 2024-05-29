import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Videos from './components/pages/Videos';
import Formation from './components/pages/Formation';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certifications" element={<Formation />} />
            <Route path='/videos' element={<Videos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;