import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/dashboard3.png';
import useAuth from '../../Hooks/authHook';
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import { bake_cookie } from 'sfcookies';
function Signin() {

  // Hooks
  const [loading, setLoading] = useState(false);
  const [cssAuthorize, setCssAuthorize] = useState(false);
  const { role, setRole, setAuthorize, apiUrl, authorizeStatus, setAuthorizeStatus, setAdmin } = useAuth();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  // JS
  const signinfunc = (e) => {
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

      setLoading(true);
      let obj = {
        email: email.current.value,
        password: password.current.value
      }

      const url = `${apiUrl}/signin`;
      // const url = `http://localhost:5000/signin`;

      axios.post(url, obj).then((res) => {

        setLoading(false);
        console.log(res.data.userOutput.role);
        setCssAuthorize(true);
        setAuthorizeStatus(res.data.msg);
        setRole(res.data.userOutput.role);
        setTimeout(() => {
          bake_cookie('isLoggedIn', true);
          setAuthorize(true);
          navigate('/dashboard');
          setAuthorizeStatus('');
          email.current.value = '';
          password.current.value = '';
        }, 2000)

      }).catch((err) => {

        setLoading(false);
        console.log(err);
        if (err.response) {
          setAuthorizeStatus(err.response.data);
        } else {
          setAuthorizeStatus(err.message);
        }
        bake_cookie('isLoggedIn', false);
        setTimeout(() => {
          setAuthorizeStatus('');
        }, 2500)

      })
    }
  }

  useEffect(() => {
    if (role === 'admin') {
      console.log('admin aagya');
      setAdmin(true);
      bake_cookie('isAdmin', true);
    } else if (role === 'user') {
      console.log("user aaya hai");
      setAdmin(false);
      bake_cookie('isAdmin', false);
    }
  }, [role]);

  return (
    <>
      <div className={`container ${cssAuthorize ? 'signin-true' : 'signin'} d-flex align-items-center justify-content-center`}>
        <div className={`row1 col-lg-3 col-md-5 col-sm-6 col-8`}>
          <div className="card-header py-2 bg-dark">
            <div className="ec-brand text-center">
              <img className="dashboard-logo" src={Logo} alt="logo" />
            </div>
          </div>
          <div className='text-center div2'>
            <h3 className='fw-bold'>
              {authorizeStatus}
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div style={{ marginBottom: '120px' }} className="col-lg-6 col-md-7 col-sm-8 col-10">
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
                        <label onClick={(e) => signinfunc(e)} style={{ borderRadius: '10px' }} className="btn btn-md btn-dark px-4 fw-bold shadow-none mt-2 mb-3 ">Sign In</label>
                        <h5 className='text-danger'>
                          {loading ?
                            <BeatLoader style={{ color: "black", position: "relative", top: "2px" }} size="12px" /> : authorizeStatus
                          }
                        </h5>
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
        </div >
      </div >
    </>
  )
}

export default Signin;