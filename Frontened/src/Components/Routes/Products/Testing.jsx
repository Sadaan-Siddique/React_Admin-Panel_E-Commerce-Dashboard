import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/authHook';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";

function ProductList() {
    const { apiUrl } = useAuth();
    const [productsArr, setProductsArr] = useState([]);
    const [beatLoader, setBeatLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Number of products to display per page

    useEffect(() => {
        setBeatLoading(true);
        const url = `${apiUrl}/get_products`;
        axios.get(url).then((res) => {
            console.log(res.data.modified_products);
            setProductsArr(res.data.modified_products);
            setBeatLoading(false);
            console.log(productsArr);
        }).catch((err) => {
            console.log(err);
            setBeatLoading(false);
        });
    }, []);

    // Get current products based on pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsArr.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                                            <select className="datatable-selector" defaultValue="10">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="25">25</option>
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
                                            <div style={{ paddingBottom: '16px' }} className='text-center pt-5'>
                                                <BeatLoader style={{ color: "black", position: 'relative', left: '180%' }} size="18px" />
                                            </div>
                                            :
                                            <tbody>
                                                {productsArr.map((item, index) => {
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
                                        }
                                    </table>
                                </div>
                                <div className="datatable-bottom">
                                    <div className="datatable-info">Showing 1 to 5 of 57 entries</div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
