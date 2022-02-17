import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchFPLData } from '../store/Header.slice';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';

export const Header = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFPLData());
    }, []);

    return (
        <>
            <Navbar />
            <Banner />
            <Outlet />
        </>
    );
};
