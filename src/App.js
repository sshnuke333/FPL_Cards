import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Disclaimer } from './view/Disclaimer';
import { Header } from './view/Header';
import { Play } from './view/Play';
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="play" element={<Play />} />
                <Route path="disclaimer" element={<Disclaimer />} />
            </Route>
        </Routes>
    );
}
