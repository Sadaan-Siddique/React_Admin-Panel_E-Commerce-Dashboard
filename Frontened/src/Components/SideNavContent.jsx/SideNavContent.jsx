import React, { useState } from 'react';
import AreaChart from '../ChartsJs/AreaChart';
import BarChart from '../ChartsJs/BarChart';
import '../css/style.css';
import PieChart from '../ChartsJs/PieChart';
// import useAuth from '../../Hooks/authHook';

function SideNavContent() {
    // React Chart.js


    // const { toggleTheme } = useAuth();

    return (
        <>
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="row row1">
                        <div className="col-xl-3 col-md-6">
                            <div className="card mb-4 ">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="card-body">20,000</div>
                                        <label className="small ps-3 stretched-link" href="/">Daily Signups</label>
                                    </div>
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-person-fill-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card mb-4 ">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="card-body">20,000</div>
                                        <label className="small ps-3 stretched-link" href="/">Daily Visitors</label>
                                    </div>
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-person-fill-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card mb-4 ">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="card-body">20,000</div>
                                        <label className="small ps-3 stretched-link" href="/">Daily Order</label>
                                    </div>
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-person-fill-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card mb-4 ">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="card-body">20,000</div>
                                        <label className="small ps-3 stretched-link" href="/">Revenue</label>
                                    </div>
                                    <div className="sb-nav-link-icon">
                                        <i className="bi bi-person-fill-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    {/* <i className="fas fa-chart-area me-1"></i> */}
                                    Sales Report
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar me-1"></i>
                                    Pie Chart
                                </div>
                                <div className="card-body">
                                    <PieChart />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-8 col-lg-10">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar me-1"></i>
                                    Chart.js Example
                                </div>
                                <div className="card-body">
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </main>

        </>
    )
}

export default SideNavContent