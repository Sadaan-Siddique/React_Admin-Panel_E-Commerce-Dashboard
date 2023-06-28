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
                <Link to={'/productList'} style={{ borderRadius: '10px' }} className="btn btn-md btn-dark px-3 fw-bold shadow-none">View Products</Link>
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
                      <form className="row border border-2 border-success">

                        <div className="col-lg-4 border border-2 border-danger">
                          <div className="ec-vendor-img-upload">
                            <div className="ec-vendor-main-img">
                              <div className="avatar-upload">
                                <div className="avatar-edit">
                                  <input type="file" id="imageUpload" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                  <label htmlFor="imageUpload">
                                    <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                  </label>
                                </div>
                                <div className="avatar-preview ec-preview">
                                  <div className="imagePreview ec-div-preview">
                                    <img className="ec-image-preview" src="assets/img/products/vender-upload-preview.jpg" alt="edit" />
                                  </div>
                                </div>
                              </div>
                              <div className="thumb-upload-set colo-md-12">
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload01" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload01">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload02" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload02">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload03" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload03">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload04" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload04">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload05" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload05">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                                <div className="thumb-upload">
                                  <div className="thumb-edit">
                                    <input type="file" id="thumbUpload06" className="ec-image-upload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="thumbUpload06">
                                      <img src="assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                    </label>
                                  </div>
                                  <div className="thumb-preview ec-preview">
                                    <div className="image-thumb-preview">
                                      <img className="image-thumb-preview ec-image-preview" src="assets/img/products/vender-upload-thumb-preview.jpg" alt="edit" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-8 border border-2 border-info">
                          <div className="col-md-6">
                            <label htm
                              lFor="inputEmail4" className="form-label">Product name</label>
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
                            <button style={{ borderRadius: '10px' }} type="submit" className="btn btn-md btn-dark px-4 fw-bold mt-3 shadow-none">Submit</button>
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
