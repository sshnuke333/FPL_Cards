import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchFPLData } from '../store/Header.slice';
import { Navbar } from '../components/Navbar';

export const Header = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFPLData());
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
