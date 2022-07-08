import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  render() {
      return (
        <div className="container">
              <div className="row d-flex align-items-center justify-content-center min-vh-100">
                  <div className="col col-md-4">
                    <div className="register-box">
                        <div className="register-logo">
                            <a href="../../index2.html"><b>Admin</b>Appreact</a>
                        </div>
                        <div className="card">
                            <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <form>
                                <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-user" />
                                    </div>
                                </div>
                                </div>
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
                                <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Retype password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                    <label htmlFor="agreeTerms">
                                        I agree to the <a href="#tes">terms</a>
                                    </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button className="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                                </div>
                            </form>
                            <Link to="/login" className="text-center">I already have a membership</Link>
                            </div>
                            {/* /.form-box */}
                        </div>{/* /.card */}
                    </div>
                  </div>
              </div>
        </div>
            

    )
  }
}
