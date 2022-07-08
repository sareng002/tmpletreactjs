import React from "react"
import Content from "../../components/global/Content"
import Footer from "../../components/global/Footer"
import Nav from "../../components/global/Nav"
import Sidebar from "../../components/global/sidebar"
export default function Profail()
{
    return (
        <>
            <Nav>
                Profail
            </Nav>
            <Sidebar />
            <Content>
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        tes
                    </div>
                    <div className="card-body">
                        <h2>Profail</h2>
                    </div>
                </div>
            </Content>
            <Footer />
       
        </>
           )
}