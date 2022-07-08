import React from "react"
import { Link } from "react-router-dom"
export default function Footer()
{
    return (
           
            <footer className="main-footer">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">
                Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright © 2014-2021 <Link to="http://localhost:3000/">Crud React</Link>.</strong> All rights reserved.
            </footer>
           


           )
}