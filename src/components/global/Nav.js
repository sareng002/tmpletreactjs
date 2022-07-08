import React from "react"
import { Link } from "react-router-dom";
export default function Nav(props)
{
    return (
        <>
          {/* <!-- Navbar --> */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to="/" role="button"><i className="fas fa-bars" /></Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link" >{ props.children }</Link>
                    </li>
                   
                </ul>
                {/* Right navbar links */}
                
            </nav>

            {/* <!-- /.navbar --> */}
        </>

    )
}