import React from 'react'
import Logo from '../../images/dashboard3.png';
import '../css/style.css';

function Signup() {
  return (
    <>
      <div className="container signup d-flex align-items-center justify-content-center form-height pt-24px pb-24px">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-10">
            <div className="card">
              <div className="card-header bg-primary">
                <div className="ec-brand">
                  <img className="dashboard-logo" src={Logo} alt="" />
                </div>
              </div>
              <div className="card-body p-5">
                <h4 className="text-dark mb-5">Sign Up</h4>

                <form action="/index.html">
                  <div className="row">
                    <div className="form-group col-md-12 mb-4">
                      <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <input type="email" className="form-control" id="email" placeholder="Username" />
                    </div>

                    <div className="form-group col-md-12 ">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>

                    <div className="form-group col-md-12 ">
                      <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />
                    </div>

                    <div className="col-md-12">
                      <div className="d-inline-block mr-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="agree" />
                          <label className="form-check-label" for="agree">I Agree the terms and conditions</label>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>

                      <p className="sign-upp">Already have an account?
                        <a className="text-blue" href="sign-in.html">Sign in</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup