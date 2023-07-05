import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img404 from '../../images/something-lost.png';
import '../css/style.css';

function UniversalRoute() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000)
    }, [navigate]);
    return (
        <>
            <div className="container text-center mt-4">
                <div className="content centered">
                    <img style={{ width: "500px" }} src={img404} alt='img' />
                    <h1>Oops, looks like the page is lost.</h1>
                    <p style={{ fontSize: "22px" }} className="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                </div>
            </div>
        </>
    )
}

export default UniversalRoute