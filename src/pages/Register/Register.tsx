import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

                        formData.append('email', values.username);
                        formData.append('password', values.password);
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
                                                <h4 className="text-center mb-4">
                                                    Sign up your account
                                                </h4>
                                                <div className="form-group mb-4">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="username"
                                                    >
                                                        Full Name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter fullname"
                                                        value={values.username}
                                                        name="username"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="email"
                                                    >
                                                        Full Name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        name="email"
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
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-block"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
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

export default Register;