import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/dashboard3.png';
import useAuth from '../../Hooks/authHook';
import '../css/style.css';
function Signin() {
  const { setAuthorize } = useAuth();

  const email = useRef();
  const password = useRef()

  const authorizefunc = (e) => {
    e.preventDefault();
    if (email.current.value === '' || password.current.value === '') {
      if (email.current.value === '' && password.current.value === '') {
        alert('Please Write Email and Password')
      } else if (email.current.value === '') {
        alert('Please Write Email')
      } else {
        alert('Please Write Password')
      }
    } else {
      let obj = {
        email: email.current.value,
        password: password.current.value
      }
      setAuthorize(true)
      console.log(obj)
    }

  }
  return (
    <>
      <div className="container signup d-flex align-items-center justify-content-center ">
        <div className="row justify-content-center">
          <div style={{ marginBottom: '120px' }} className="col-lg-6 col-md-10 col-sm-10 col-10">
            <div className="card">
              <div className="card-header bg-dark">
                <div className="ec-brand text-center">
                  <img className="dashboard-logo" src={Logo} alt="logo" />
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="text-dark text-center fw-bold mb-4">Sign In</h3>
                <form action="/index.html">

                  <div className="row">

                    <div className="form-group col-md-12 mb-4">
                      <input type="email" ref={email} className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-group col-md-12 ">
                      <input type="password" ref={password} className="form-control" placeholder="Password" />
                    </div>

                    <div className="col-md-12 pt-3">
                      {/* <div className="d-inline-block col-lg-12 me-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="agree" />
                          <label className="form-check-label" for="agree">I Agree the terms and conditions</label>
                        </div>
                      </div> */}
                      <div className="text-center">
                        <label onClick={(e) => authorizefunc(e)} style={{ borderRadius: '10px' }} className="btn btn-md btn-dark px-4 fw-bold shadow-none mt-2 mb-3 ">Sign In</label>
                        <p className="sign-upp">Don't have an account?
                          <Link to={'/signup'} className="text-primary ms-1 fw-bold">Sign up</Link>
                        </p>
                      </div>
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

export default Signin;