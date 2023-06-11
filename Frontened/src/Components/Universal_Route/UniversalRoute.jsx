import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function UniversalRoute() {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000)
    }, [navigate])
    return (
        <>
            <div style={{ paddingLeft: '5%' }} className="div404 container d-flex border border-2 shadow rounded ">
                <div className="d-flex align-items-center">
                    <i className='fas fa-file-excel'></i>
                </div>
                <div className="ps-3">
                    <h1 className='fw-bold display-5'>Invalid Route</h1>
                    <h2 className='ps-3'><span className='fw-bold text-danger pe-2'>404</span>Page Not Found</h2>
                </div>
            </div>
        </>
    )
}

export default UniversalRoute