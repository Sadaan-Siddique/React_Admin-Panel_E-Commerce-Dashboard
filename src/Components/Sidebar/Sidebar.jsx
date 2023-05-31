import React from 'react';
import SideNavContent from '../SideNavContent.jsx/SideNavContent';
import '../css/style.css';
import { Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                                <hr />
                                <a className="nav-link" href="index.html">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                    Dashboard
                                </a>
                                <hr />
                                <div className="sb-sidenav-menu-heading">Views</div>
                                <a className="nav-link" href="charts.html">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Cash Flow
                                </a>
                                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse"
                                    data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-columns"></i>
                                    </div>
                                    Products
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </a>
                                <div className="collapse " id="collapseLayouts" aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="layout-static.html">
                                            {/* <i className='fs fas fa-list'></i> */}
                                            Products List</a>
                                        <a className="nav-link" href="layout-sidenav-light.html">
                                            {/* <i className="bi bi-plus"></i> */}
                                            Add Product
                                        </a>
                                        <a className="nav-link" href="layout-sidenav-light.html">Delete Product</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                    aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Orders
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse " id="collapsePages" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link" href="layout-static.html">New Order</a>
                                        <a className="nav-link" href="layout-sidenav-light.html">Order History</a>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseInventory"
                                    aria-expanded="false" aria-controls="collapseInventory">
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-list-columns"></i>
                                    </div>
                                    Inventory
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse " id="collapseInventory" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link" href="layout-static.html">
                                            {/* <i className="bi bi-plus"></i> */}
                                            Add Inventory
                                        </a>
                                        <a className="nav-link" href="layout-sidenav-light.html">
                                            {/* <i className="bi bi-card-text"></i> */}
                                            Inventory Detail
                                        </a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseUsers"
                                    aria-expanded="false" aria-controls="collapseUsers">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    Users
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </a>
                                <div className="collapse " id="collapseUsers" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link" href="layout-static.html">
                                            {/* <i className="bi bi-people-fill"></i> */}
                                            Users List</a>
                                        <a className="nav-link" href="layout-sidenav-light.html">
                                            {/* <i className="bi bi-person-circle"></i> */}
                                            User Profile</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <Outlet />
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                <div>
                                    <a href="/">Privacy Policy</a>
                                    &middot;
                                    <a href="/">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Sidebar