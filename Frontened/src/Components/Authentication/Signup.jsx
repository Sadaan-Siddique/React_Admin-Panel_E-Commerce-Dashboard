import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import Logo from '../../images/dashboard3.png';
import useAuth from '../../Hooks/authHook';
import axios from 'axios';
import { bake_cookie } from 'sfcookies';
import '../css/style.css';

function Signup() {

  // Hooks
  const [loading, setLoading] = useState(false);
  const [cssAuthorize, setCssAuthorize] = useState(false);
  const { apiUrl, authorizeStatus, setAuthorizeStatus, setAuthorize } = useAuth();
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  // JS
  const signupfunc = (e) => {
    e.preventDefault();
    // Conditions
    if (username.current.value === '' || email.current.value === '' || password.current.value === '') {

      if (username.current.value === '' && email.current.value === '' && password.current.value === '') {
        alert('Please write Username, Email and Password.');
      } else if (username.current.value === '' && email.current.value === '') {
        alert("Write Username and Email !");
      } else if (username.current.value === '' && password.current.value === '') {
        alert('Write Username and Password !');
      } else if (email.current.value === '' && password.current.value === '') {
        alert('Write Email and Password !');
      } else if (username.current.value === '') {
        alert('Please Write Username.');
      } else if (email.current.value === '') {
        alert('Please Write Email.');
      } else {
        alert('Please Write Password.');
      }

    }
    // Else 
    else {
      setLoading(true);
      // Creating Object
      let obj = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      console.log(obj);
      const url = `${apiUrl}/signup`;
      // POST Request
      axios.post(url, obj).then((res) => {

        setLoading(false);
        console.log(res.data);
        setCssAuthorize(true);
        setAuthorizeStatus(res.data.msg);
        setTimeout(() => {
          bake_cookie('isLoggedIn', true);
          setAuthorize(true);
          navigate('/dashboard');
          setAuthorizeStatus('');
          username.current.value = '';
          email.current.value = '';
          password.current.value = '';
        }, 2500)

      }).catch((err) => {

        setLoading(false);
        setAuthorizeStatus(err.response.data);
        console.log(err);
        bake_cookie('isLoggedIn', false);
        setTimeout(() => {
          setAuthorizeStatus('');
        }, 3000)

      })

    }

  }


  return (
    <>
      <div className={`container signup ${cssAuthorize ? 'signin-true' : 'signin'} d-flex align-items-center justify-content-center `}>
        <div className={`row1 col-lg-4 col-md-5 col-sm-6 col-8`}>
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
        <div className="row justify-content-center mb-5">
          <div className="col-lg-5 col-md-6 col-sm-9 col-12">
            <div className="card">
              <div className="card-header bg-dark">
                <div className="ec-brand text-center">
                  <img className="dashboard-logo" src={Logo} alt="" />
                </div>
              </div>
              <div className="card-body p-4">
                <h3 className="text-dark text-center fw-bold mb-4">Sign Up</h3>
                <form action="/index.html">

                  <div className="row">

                    <div className="form-group col-md-12 mb-4">
                      <input type="text" ref={username} className="form-control" placeholder="Username" />
                    </div>

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
                        <label onClick={(e) => { signupfunc(e) }} style={{ borderRadius: '10px' }} className="btn btn-md btn-dark px-4 fw-bold shadow-none mt-2 mb-3 ">Sign Up</label>
                        {/* <h5 className='text-danger'>
                          {loading ?
                            <BeatLoader style={{ color: "black", position: "relative", top: "2px" }} size="12px" /> : <h5 className={cssAuthorize ? 'text-success' : 'text-danger'}>{authorizeStatus}</h5>
                          }
                        </h5> */}
                        <h5 className='text-danger text-wrap px-4'>
                          {loading ?
                            <BeatLoader style={{ color: "black", position: "relative", top: "2px" }} size="12px" /> : authorizeStatus
                          }
                        </h5>
                        <p className="sign-upp">Already have an account?
                          <Link to={'/signin'} className="text-primary ms-1 fw-bold">
                            {/* <p>Sign in</p> */}
                            Sign in
                          </Link>
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

export default Signup