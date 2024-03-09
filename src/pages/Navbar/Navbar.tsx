import React from 'react';
// import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    function logout() {
        console.log('logout');

        localStorage.removeItem('authanticated');
        navigate('/login');
    }
    return (
        <div id="main-wrapper">
            <div className="nav-header">
                <a href="dashboard" className="brand-logo">
                    <img
                        className="logo-dash"
                        src="/public/assets/images/logo.png"
                        alt=""
                    />
                </a>
                <div className="nav-control d-none">
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left"></div>
                            <ul className="navbar-nav header-right">
                                <li className="nav-item dropdown header-profile">
                                    <a
                                        className="nav-link"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            onClick={logout}
                                        >
                                            LogOut
                                        </button>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a
                                            href="#"
                                            className="dropdown-item ai-icon"
                                        >
                                            <svg
                                                id="icon-user2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-primary"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            <span className="ms-2">
                                                Profile{' '}
                                            </span>
                                        </a>
                                        <a
                                            href="Logout"
                                            className="dropdown-item ai-icon"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-danger"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line
                                                    x1="21"
                                                    y1="12"
                                                    x2="9"
                                                    y2="12"
                                                ></line>
                                            </svg>
                                            <span className="ms-2">
                                                Logout{' '}
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
