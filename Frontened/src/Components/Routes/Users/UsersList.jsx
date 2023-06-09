import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import axios from 'axios';
import useAuth from '../../../Hooks/authHook';
import BeatLoader from "react-spinners/BeatLoader";

function UsersLists() {

  const [loading, setLoading] = useState(false);
  const [userArr, setUserArr] = useState([])
  const { apiUrl } = useAuth();

  useEffect(() => {
    setLoading(true);
    const url = `${apiUrl}/get_users`;
    axios.get(url).then((res) => {
      setLoading(false);
      setUserArr(res.data.users_output);
      console.log(userArr);
      console.log(res.data.users_output);
    }).catch((err) => {
      setLoading(false);
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
                User List
              </h1>
              {/* <p>Product List</p> */}
            </div>
            <div>
              <Link to={'/'} style={{ borderRadius: '10px' }} className='btn btn-md btn-dark px-3 fw-bold shadow-none'>Add User</Link>
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
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Join On</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    {loading ?
                      <div style={{ paddingBottom: '16px' }} className='text-center pt-5'>
                        <BeatLoader style={{ color: "black", position: 'relative', left: '180%' }} size="18px" />
                      </div>
                      :
                      <tbody>
                        {userArr.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}. Picture</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                              <td>{item._id}</td>
                              <td>{item.createdOn}</td>
                              <td>{item.role}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    }
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
        </div >
      </div >
    </>
  )
}

export default UsersLists;