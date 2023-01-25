import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Banner, Navbar } from '../components';
import { fetchFPLData } from '../store/Header.slice';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchFPLData(dispatch);
    }, []);

    return (
        <>
            <Navbar />
            <Banner />
            <Outlet />
        </>
    );
};

export default Header;
