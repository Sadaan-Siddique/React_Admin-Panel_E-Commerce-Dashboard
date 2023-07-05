import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/authHook';
import axios from 'axios';
import arr from '../Data';

function ProductList() {
    // Hooks
    const [productsArr, setProductsArr] = useState([]);
    const { apiUrl } = useAuth();
    useEffect(() => {
        const url = `${apiUrl}/get_products`;
        axios.get(url).then((res) => {
            console.log(res.data.modified_products);
            setProductsArr(res.data.modified_products);
            console.log(productsArr);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

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
                                        <tbody>
                                            {productsArr.map((item, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>
                                                            <span>{index}. </span>
                                                            <img style={{ width: '40px' }} src={item.imageUrl} alt='img' />
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
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="datatable-bottom">
                                    <div className="datatable-info">Showing 1 to 5 of 57 entries</div>
                                    <nav className="datatable-pagination">
                                        <ul className="datatable-pagination-list">
                                            <li className="datatable-pagination-list-item datatable-hidden datatable-disabled">
                                                <a data-page="1" href='/' className="datatable-pagination-list-item-link">‹</a>
                                            </li>
                                            <li className="datatable-pagination-list-item datatable-active">
                                                <a data-page="1" href='/' className="datatable-pagination-list-item-link">1</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="2" href='/' className="datatable-pagination-list-item-link">2</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="3" href='/' className="datatable-pagination-list-item-link">3</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="4" href='/' className="datatable-pagination-list-item-link">4</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="5" href='/' className="datatable-pagination-list-item-link">5</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="6" href='/' className="datatable-pagination-list-item-link">6</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="7" href='/' className="datatable-pagination-list-item-link">7</a>
                                            </li>
                                            <li className="datatable-pagination-list-item datatable-ellipsis datatable-disabled">
                                                <a href='/' className="datatable-pagination-list-item-link">…</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="12" href='/' className="datatable-pagination-list-item-link">12</a>
                                            </li>
                                            <li className="datatable-pagination-list-item">
                                                <a data-page="2" href='/' className="datatable-pagination-list-item-link">›</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList