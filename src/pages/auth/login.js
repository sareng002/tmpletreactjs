import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
      return (
        <div className="container">
              <div className="row d-flex align-items-center justify-content-center min-vh-100">
                <div className="col col-md-4">
                      <div className="login-box">
                        <div className="login-logo">
                            <Link to="../../index2.html"><b>Admin</b>LTE</Link>
                        </div>
                        {/* /.login-logo */}
                        <div className="card">
                            <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form>
                                <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                    </div>
                                </div>
                                </div>
                                <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button  className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* /.col */}
                                </div>
                            </form>
                            {/* /.social-auth-links */}
                            {/* <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p> */}
                            <p className="mb-0">
                                <Link to="/register" className="text-center">Register a new membership</Link>
                            </p>
                            </div>
                            {/* /.login-card-body */}
                        </div>
                        </div>
                </div>
              </div>
        </div>
            

    )
  }
}
