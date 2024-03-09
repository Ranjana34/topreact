import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProtectLayout = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.userReducer);
    const [authanticate, setAuth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        //Check login user
        if (user && user) {
            localStorage.setItem('authanticated', JSON.stringify(true));
        }
        setAuth(JSON.parse(localStorage.getItem('authanticated')));
    }, [user]);

    useEffect(() => {
        const isVerifiy = JSON.parse(localStorage.getItem('authanticated'));
        if (isVerifiy) navigate('/');
        else navigate('/login');
    }, [authanticate]);
    return (
        <>
            {/* {!authanticate ? <Login /> : <Navbar />} */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};

export default ProtectLayout;
