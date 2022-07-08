import React from "react"
import Content from "../../components/global/Content"
import Footer from "../../components/global/Footer"
import Nav from "../../components/global/Nav"
import Sidebar from "../../components/global/sidebar"
export default function Dasboard()
{
    
    return (
        <>
          <Nav>Dasboard</Nav>
            <Sidebar />
            <Content>
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        Dasboard
                    </div>
                    
                </div>
            </Content>
            <Footer />
        </>
        )
}