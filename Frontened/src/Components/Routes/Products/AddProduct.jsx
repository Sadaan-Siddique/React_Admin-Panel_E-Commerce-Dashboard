import React, { useState } from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import defaultImg from '../../../images/Default_Product.jpg';

function AddProduct() {

  const [displayProduct, setDisplayProduct] = useState({});
  const [default_img, setDefault_img] = useState(false);

  const product_img = (e) => {
    const file = e.target.files[0];
    setDisplayProduct(URL.createObjectURL(file));
    setDefault_img(true);
    console.log(URL.createObjectURL(file));
  }

  return (
    <>
      <div className="container add-product">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between px-3 py-2 my-3">
              <div>
                <h1>Add Product</h1>
                <p className="breadcrumbs">
                  <span>
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                  Product
                </p>
              </div>
              <div>
                <Link to={'/productList'} style={{ borderRadius: '10px' }} className="btn btn-md btn-dark px-3 fw-bold shadow-none">View Products</Link>
              </div>
            </div>
            <div className="card card-default mx-3">
              <div className="card-header-border-bottom mt-2">
                {/* <h2>Form</h2>   */}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-8">
                    <div className="vendor-upload-detail">
                      <form className="row">
                        <div className="col-lg-4 mt-2 mb-2">
                          <div className="avatar-container">
                            <div className="avatar">
                              <img id="avatar-preview"
                                src={default_img ? displayProduct : defaultImg}
                                alt="Avatar" />
                              <label htmlFor="avatar-upload" title="Upload Image" className="avatar-placeholder" >
                                <i className="bi bi-images"></i>
                              </label>
                            </div>
                            <input type="file" id="avatar-upload" onChange={product_img} accept=".png, .jpg, .jpeg" className="avatar-upload" />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-md-6">
                              <label htm
                                lFor="inputEmail4" className="form-label">Product name</label>
                              <input type="text" className="form-control slug-title" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Status</label>
                              <select name="categories" id="Categories" className="form-select">
                                {/* <optgroup label="Fashion"> */}
                                <option value="Active">Active</option>
                                <option value="Un-Active">Un-Active</option>
                                {/* </optgroup> */}
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <label htmlFor="slug" className="col-form-label">Cost Price</label>
                              <div className="col-12">
                                <input id="slug" name="slug" className="form-control here set-slug" type="text" />
                              </div>
                            </div>
                            <div style={{ marginTop: '5px' }} className="col-lg-6 col-md-6">
                              <label className="form-label">Sales Price
                                {/* <span>( In USD )</span> */}
                              </label>
                              <input type="number" className="form-control" id="price1" />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">Quantity</label>
                              <input type="number" className="form-control" id="quantity1" />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label">Sort Description</label>
                              <textarea className="form-control" rows="4"></textarea>
                            </div>
                            <div className="col-md-12">
                              <button style={{ borderRadius: '10px' }} type="submit" className="btn btn-md btn-dark px-4 fw-bold mt-3 shadow-none">Submit</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default AddProduct;
