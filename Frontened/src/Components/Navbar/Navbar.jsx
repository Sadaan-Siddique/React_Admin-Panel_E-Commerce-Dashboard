import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/authHook';
import PuffLoader from "react-spinners/PuffLoader";
// import dashboardWhite from '../../images/dashboard.png';
import dashboardColor from '../../images/dashboard3.png';
import { delete_cookie } from 'sfcookies';

function Navbar() {
    const [loading, setLoading] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [loggingOut, setLoggingOut] = useState('Logout');

    const { toggleTheme, setToggleTheme, setAuthorize } = useAuth();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    }
    const toggleThemefunc = () => {
        setToggleTheme(!toggleTheme)
    }

    const logoutfunc = (event) => {
        event.stopPropagation();
        setLoading(true);
        setTimeout(() => {
            setLoggingOut('Logging Out');
        }, 0.0001)
        setTimeout(() => {
            setLoading(false);
            delete_cookie('isLoggedIn');
            setAuthorize(false);
            navigate('/');
            setLoggingOut('Logout');
        }, 1500)
    }
    return (
        <>
            <div className={`${sidebarVisible ? 'sb-nav-fixed sb-sidenav-toggled' : 'sb-nav-fixed '}`}>
                <nav className={`sb-topnav navbar navbar-expand ${toggleTheme ? 'empty' : 'navbar-dark bg-dark'}`} style={{ backgroundColor: toggleTheme ? 'white' : '' }}>
                    {/* <!-- Navbar Brand--> */}
                    <Link to={'/'} className="navbar-brand mt-1">
                        <img src={dashboardColor} alt='img' className='dashboard-logo' />
                        Ekka Dashboard
                    </Link>
                    {/* <!-- Sidebar Toggle--> */}
                    <button className="btn btn-link btn-md shadow-none order-1 order-lg-0 me-4 me-lg-0 ms-5" id="sidebarToggle" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* <!-- Navbar Search--> */}
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control pt-1 shadow-none" type="text" placeholder="Search for..." aria-label="Search for..."
                                aria-describedby="btnNavbarSearch" />
                            <button style={{ height: '34px' }} className={`btn btn-sm px-3 shadow-none `} id="btnNavbarSearch" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                    <div>
                        <div style={{ cursor: 'pointer', marginBottom: '3.5px' }} className='ms-1' onClick={toggleThemefunc}>
                            {toggleTheme ?
                                // <i className="bi bi-brightness-low-fill"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='#6c757d' fill="currentColor" className="bi bi-brightness-low-fill themeIconFill" viewBox="0 0 16 16">
                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" color='#ffffff8c' fill="currentColor" className="bi bi-brightness-low themeIconNotFill" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                </svg>

                            }
                        </div>
                    </div>
                    {/* <!-- Navbar--> */}
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <label className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fas fa-user fa-fw"></i>
                            </label>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <label className="dropdown-item">Settings</label>
                                </li>
                                <li>
                                    <label className="dropdown-item">Activity Log</label>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <label onClick={logoutfunc} style={{ paddingRight: '23%' }} className="dropdown-item cursor-pointer">{loggingOut}
                                        {loading ?
                                            <PuffLoader style={{ color: "black", position: "relative", top: "1px", float: 'right' }} size="25px" /> : ''
                                        }
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <Sidebar />

            </div >
        </>
    )
}

export default Navbar