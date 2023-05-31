import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function PageNotFound() {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000)
    }, [])
    return (
        <>
            <div style={{ paddingLeft: '5%' }} className="div404 container d-flex border border-2 shadow rounded ">
                <div className="d-flex align-items-center">
                    <i className='fas fa-file-excel'></i>
                </div>
                <div className="ps-3">
                    <h1 className='fw-bold display-5'>Invalid Route</h1>
                    <h2 className='ps-3'>Page Not Found</h2>
                </div>
            </div>
        </>
    )
}

export default PageNotFound