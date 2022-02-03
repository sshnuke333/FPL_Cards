import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Play } from './components/play/Play';
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/play" element={<Play />} />
                </Route>
            </Routes>
        </Router>
    );
}
