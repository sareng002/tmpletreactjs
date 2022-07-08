import React from "react"
import ControlSidebar from '../global/ControlSidebar';
import Footer from '../global/Footer';
import Nav from '../global/Nav'
import Sidebar from '../global/sidebar';
import Content from '../global/Content';
export default function AppLayout()
{
    return (
        <>
            <Nav>
                layots
          </Nav>
          <Sidebar />
          <Content />
          <ControlSidebar />
          <Footer />
        </>

    )
}