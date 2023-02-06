import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from './components';

const Header = lazy(
    () => import(/* webpackChunkName: "Header" */ './view/Header')
);
const Home = lazy(
    () => import(/* webpackChunkName: "Home" */ './view/home/Home')
);
const Play = lazy(
    () => import(/* webpackChunkName: "Play" */ './view/play/Play')
);
const Disclaimer = lazy(
    () =>
        import(
            /* webpackChunkName: "Disclaimer" */ './view/Disclaimer/Disclaimer'
        )
);
const NotFound = lazy(
    () => import(/* webpackChunkName: "NotFound" */ './view/404/NotFound')
);

const App = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />} />
                <Route path="play" element={<Play />} />
                <Route path="disclaimer" element={<Disclaimer />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </Suspense>
);

export default App;
