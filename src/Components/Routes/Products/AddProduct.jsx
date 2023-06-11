import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';

function AddProduct() {
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
                <Link to={'/productList'} style={{borderRadius:'10px'}} className="btn btn-md btn-dark px-3 fw-bold shadow-none">View Products</Link>
              </div>
            </div>
            <div className="card card-default mx-3">
              <div className="card-header-border-bottom text-center mt-2">
                {/* <h2>Form</h2>   */}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="vendor-upload-detail">
                      <form className="row">
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">Product name</label>
                          <input type="text" className="form-control slug-title" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Select Categories</label>
                          <select name="categories" id="Categories" className="form-select">
                            <optgroup label="Fashion">
                              <option value="t-shirt">T-shirt</option>
                              <option value="dress">Dress</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option value="table">Table</option>
                              <option value="sofa">Sofa</option>
                            </optgroup>
                            <optgroup label="Electronic">
                              <option value="phone">I Phone</option>
                              <option value="laptop">Laptop</option>
                            </optgroup>
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
                        {/* <div className="col-md-12">
                          <label className="form-label">Sort Description</label>
                          <textarea className="form-control" rows="2"></textarea>
                        </div> */}
                        <div className="col-md-6">
                          <label className="form-label">Quantity</label>
                          <input type="number" className="form-control" id="quantity1" />
                        </div>
                        {/* <div className="col-md-12">
                          <label className="form-label">Full Detail</label>
                          <textarea className="form-control" rows="4"></textarea>
                        </div> */}
                        {/* <div className="col-md-12">
                          <label className="form-label">Product Tags <span>( Type and make comma to separate tags )</span></label>
                          <div className="bootstrap-tagsinput">
                            <input type="text" placeholder="" />
                          </div>
                          <input type="text" className="form-control" id="group_tag" name="group_tag" value="" placeholder="" data-role="tagsinput" style={{ display: 'none' }} />
                        </div> */}
                        <div className="col-md-12">
                          <button style={{borderRadius:'10px'}} type="submit" className="btn btn-md btn-dark px-4 fw-bold mt-3 shadow-none">Submit</button>
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
