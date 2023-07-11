import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/authHook';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";

function ProductList() {
    const { apiUrl } = useAuth();
    const [beatLoader, setBeatLoader] = useState(false);
    const [isData, setIsData] = useState(true);
    const [errMsg, setErrMsg] = useState('');
    const [productsArr, setProductsArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);

    useEffect(() => {
        fetchData();
    }, []);
    function fetchData() {
        setBeatLoader(true);
        setErrMsg('');
        const url = `${apiUrl}/get_products`;
        axios.get(url).then((res) => {
            console.log(res.data.modified_products);
            setProductsArr(res.data.modified_products);
            setBeatLoader(false);
            setIsData(false);
            console.log(productsArr);
        }).catch((err) => {
            console.log(err);
            setErrMsg(`Data Not Found (${err.message})`);
            setBeatLoader(false);
            setIsData(true);
        });
    }

    // Get current products based on pagination
    const indexOfLastProduct = Math.min(currentPage * productsPerPage, productsArr.length);
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsArr.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(currentProducts);
    useEffect(() => {
        if (currentProducts === []) {
            const currentProducts = productsPerPage;
        } else {
            const currentProducts = productsArr.slice(indexOfFirstProduct, indexOfLastProduct);
        }
    }, [currentProducts]);

    const paginate = (pageNumber) => {
        if (pageNumber < 1) {
            setCurrentPage(Math.ceil(productsArr.length / productsPerPage));
        } else if (pageNumber > Math.ceil(productsArr.length / productsPerPage)) {
            setCurrentPage(1);
        } else {
            setCurrentPage(pageNumber);
        }
    };
    const setPageFunc = (event) => {
        const selectedValue = event.target.value;
        setProductsPerPage(selectedValue);
    }

    return (
        <>
            <div className='productList'>
                <div className="container-fluid px-4 py-3">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                            <h1 className=''>
                                Products
                            </h1>
                            <p>Product List</p>
                        </div>
                        <div>
                            <Link to={'/addProduct'} style={{ borderRadius: '10px' }} className='btn btn-md btn-dark px-3 fw-bold shadow-none'>Add Product</Link>
                        </div>
                    </div>
                    <div className='list-div mt-4'>
                        <div className="card mb-4">
                            {/* <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable Example
                            </div> */}
                            <div className="card-body">
                                <div className="datatable-top">
                                    <div className="datatable-dropdown">
                                        <label>
                                            <select onChange={setPageFunc} className="datatable-selector" defaultValue="5">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </select>
                                            Entries
                                        </label>
                                    </div>
                                    <div className="datatable-search">
                                        <input className="datatable-input" placeholder="Search..." type="search" title="Search within table" aria-controls="datatablesSimple" />
                                    </div>
                                </div>
                                <div className="datatable-container">
                                    <table id="datatablesSimple" className='datatable-table'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Sale.P</th>
                                                <th>Cost.P</th>
                                                <th>Stock</th>
                                                <th>Info</th>
                                            </tr>
                                        </thead>
                                        {beatLoader ?
                                            <div style={{ paddingBottom: '', position: 'relative', left: '180%' }} className='text-center pt-5'>
                                                <BeatLoader style={{ color: "black" }} size="18px" />
                                            </div>
                                            :
                                            <>
                                                <tbody>

                                                    {currentProducts.map((item, index) => {
                                                        return (
                                                            <tr key={index} >
                                                                <td>
                                                                    <img src={item.imageUrl} alt='img' />
                                                                </td>
                                                                <td>{item.productName}</td>
                                                                <td>{item.salesPrice}</td>
                                                                <td>{item.costPrice}</td>
                                                                <td>{item.quantity}</td>
                                                                <td>
                                                                    <div className="btn-group">
                                                                        {/* <button type="button" className="btn btn-outline-dark">Info</button> */}
                                                                        <button type="button" className="btn btn-sm btn-outline-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                                                                            <span className="me-2">Info</span>
                                                                        </button>
                                                                        <ul style={{ minWidth: '100px' }} className="dropdown-menu">
                                                                            <li>
                                                                                <label className="dropdown-item">Edit</label>
                                                                            </li>
                                                                            <li>
                                                                                <label className="dropdown-item">Delete</label>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                    }
                                                </tbody>
                                            </>
                                        }
                                    </table>
                                </div>
                                {isData ?
                                    <div style={{ position: 'relative', top: '20px' }} className="text-center">
                                        <h2 className='fw-bold text-danger'>{errMsg}</h2>
                                        {errMsg !== '' ?
                                            <h5 className='mt-3'>Please try again Later
                                                <button onClick={fetchData} className='btn btn-sm btn-dark px-3 rounded fw-bold ms-5 shadow-none'>Reload</button>
                                            </h5>
                                            : ''}
                                    </div>
                                    :
                                    <div className="datatable-bottom">
                                        <div className="datatable-info">
                                            {`Showing ${indexOfFirstProduct + 1} to ${indexOfLastProduct} of ${productsArr.length} Products`}
                                        </div>
                                        <div className="datatable-pagination">
                                            <ul className="datatable-pagination-list">
                                                <li className={`datatable-pagination-list-item ${currentPage === 1 ? 'datatable-hidden datatable-disabled' : ''}`}>
                                                    <button onClick={() => paginate(currentPage - 1)} className="datatable-pagination-list-item-link">‹</button>
                                                </li>
                                                {Array.from({ length: Math.ceil(productsArr.length / productsPerPage) }).map((_, index) => (
                                                    <li
                                                        key={index}
                                                        className={`datatable-pagination-list-item ${currentPage === index + 1 ? 'datatable-active' : ''}`}
                                                    >
                                                        <button onClick={() => paginate(index + 1)} className="datatable-pagination-list-item-link">
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                ))}
                                                <li className={`datatable-pagination-list-item ${currentPage === Math.ceil(productsArr.length / productsPerPage) ? 'datatable-hidden datatable-disabled' : ''}`}>
                                                    <button onClick={() => paginate(currentPage + 1)} className="datatable-pagination-list-item-link">›</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
