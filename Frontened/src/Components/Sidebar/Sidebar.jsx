import React from 'react';
import '../css/style.css';
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../Hooks/authHook';

function Sidebar() {

    const { toggleTheme } = useAuth();

    return (
        <>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className={`sb-sidenav accordion ${toggleTheme ? 'sb-sidenav-light' : 'sb-sidenav-dark'} `} id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                                <Link to={'/dashboard'} className="nav-link mt-3">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                    Dashboard
                                </Link>
                                <div className="sb-sidenav-menu-heading">Views</div>
                                <Link to={'/dashboard'} className="nav-link">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Cash Flow
                                </Link>
                                <label className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon">
                                        <i class="fa fa-th-list"></i>
                                    </div>
                                    Products
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </label>
                                <div className="collapse " id="collapseLayouts" aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <Link to={'/productList'} className="nav-link">Products List</Link>
                                        <Link to={'/addProduct'} className="nav-link">Add Product</Link>
                                        <Link to={'/deleteProduct'} className="nav-link">Delete Product</Link>
                                    </nav>
                                </div>
                                <label className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                                    aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                    Orders
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </label>
                                <div className="collapse " id="collapsePages" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <Link to={'/newOrder'} className="nav-link">New Order</Link>
                                        <Link to={'/orderHistory'} className="nav-link">Order History</Link>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <label className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseInventory"
                                    aria-expanded="false" aria-controls="collapseInventory">
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-list-columns"></i>
                                    </div>
                                    Inventory
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </label>
                                <div className="collapse " id="collapseInventory" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <Link to={'/addInventory'} className="nav-link">
                                            {/* <i className="bi bi-plus"></i> */}
                                            Add Inventory
                                        </Link>
                                        <Link to={'/inventoryDetail'} className="nav-link">
                                            {/* <i className="bi bi-card-text"></i> */}
                                            Inventory Detail
                                        </Link>
                                    </nav>
                                </div>
                                <label className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseUsers"
                                    aria-expanded="false" aria-controls="collapseUsers">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    Users
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </label>
                                <div className="collapse " id="collapseUsers" aria-labelledby="headingTwo"
                                    data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <Link to={'/usersLists'} className="nav-link">
                                            {/* <i className="bi bi-people-fill"></i> */}
                                            Users List</Link>
                                        <Link to={'/userProfile'} className="nav-link">
                                            {/* <i className="bi bi-person-circle"></i> */}
                                            User Profile</Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer small fw-bold">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content" className=' '>
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