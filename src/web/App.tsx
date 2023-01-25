import { Routes, Route } from 'react-router-dom';
import Header from './view/Header';
import Home from './view/home/Home';
import Play from './view/play/Play';
import Disclaimer from './view/Disclaimer/Disclaimer';
import NotFound from './view/404/NotFound';

const App = () => (
    <Routes>
        <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="play" element={<Play />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default App;
