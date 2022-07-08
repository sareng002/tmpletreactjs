import React from "react"
import { Link } from "react-router-dom";
import LogoDasboard from "../Logo/LogoDasboard"
import LogoHome from "../Logo/LogoHome"
import LogoUser from "../Logo/LogoUser"
import AppLogo from "./App_Logo"
export default function Sidebar()
{
    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link px-4">
                        <AppLogo />
                    <span className="brand-text font-weight-light px-2">App Crud React</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user3-128x128.jpg" className="img-circle elevation-2" alt="foto user" />
                        </div>
                        <div className="info">
                            <a href="#tes" className="d-block">Sutiyoso</a>
                        </div>
                    </div>
                   
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <Link to="/" className="nav-link ">
                                    <LogoHome/>
                                    <p className="px-2">
                                    Home
                                    <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>About</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/profail" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Profail</p>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item menu-open">
                                <Link to="/dasboard" className="nav-link">
                                    <LogoDasboard />
                                    <p className="px-2">
                                    Dasboard
                                    <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                    <Link to="/datakk" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Data KK</p>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/datapenduduk" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Data Penduduk</p>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/posts" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>posts</p>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                             <li className="nav-item menu-open">
                                <a href="#tes" className="nav-link">
                                    <LogoUser />
                                    <p className="px-2">
                                    User
                                    <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Login</p>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Register</p>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
            {/* /.sidebar */}
            </aside>

        </>

           )
}