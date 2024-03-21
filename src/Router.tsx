import { Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Abilities from './components/pages/Abilities';
import Media from './components/pages/Media';
import NotFound from './components/pages/NotFound';

const Router: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;