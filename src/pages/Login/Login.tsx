import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LoginGuestAsync, LoginUserAsync } from '../../store/reducers/user';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function login(fdata: any) {
        dispatch(LoginUserAsync({ userData: fdata, navigate: navigate }));
    }

    return (
        <>
            <Formik
                initialValues={{
                    username: 'admin@gmail.com',
                    password: '123456',
                    submit: null,
                }}
                onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                ) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        const formData = new FormData();
                        console.log('Before appending values:', formData);
                        if (values.username == '' || values.password == '') {
                            toast.error('Please Input email & password!');
                            return;
                        }
                        formData.append('email', values.username);
                        formData.append('password', values.password);

                        if (values.submit === 'login') {
                            login(formData);
                        } else if (values.submit === 'guest') {
                            console.log({email:values.username,password:values.password},"Guest Register");
                            dispatch(LoginGuestAsync({ userData: {email:values.username,password:values.password}, navigate: navigate }));
                        }

                        
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    touched,
                    values,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="fix-wrapper">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="card mb-0 h-auto">
                                            <div className="card-body">
                                                <div className="text-center mb-3">
                                                    <img
                                                        className="logo-auth"
                                                        src="/public/assets/images/logo.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="username"
                                                    >
                                                        Username
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter username"
                                                        value={values.username}
                                                        name="username"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-sm-4 mb-3 position-relative">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="dlab-password"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        required
                                                        type="password"
                                                        id="dlab-password"
                                                        className="form-control"
                                                        value={values.password}
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="show-pass eye">
                                                        <i className="fa fa-eye-slash"></i>
                                                        <i className="fa fa-eye"></i>
                                                    </span>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary btn-block"
                                                    onClick={() => setFieldValue('submit', 'login')}
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                                <div className="text-center py-2">
                                                    <button type="submit" className="btn btn-secondary btn-block" 
                                                    onClick={() => setFieldValue('submit', 'guest')}
                                                    >
                                                        Sign with Guest
                                                    </button>
                                                </div>
                                                <p
                                                    className="my-2 text-center"
                                                    style={{ color: 'gray' }}
                                                    onClick={() => { navigate('/register'); }}
                                                >
                                                    Create new account
                                                    <span className="back-to-login">
                                                        {' '}
                                                        Sign Up
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Login;
