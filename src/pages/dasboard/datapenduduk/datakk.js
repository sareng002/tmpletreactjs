import React from "react"
import Content from "../../../components/global/Content"
import Footer from "../../../components/global/Footer"
import Nav from "../../../components/global/Nav"
import Sidebar from "../../../components/global/sidebar"
export default function DataKK()
{
    return (
        <>
          <Nav>Data Keluarga</Nav>
            <Sidebar />
            <Content>
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        Data Keluarga
                    </div>
                    <div className="card-body">
                        <h2>Data Keluarga</h2>
                    </div>
                </div>
            </Content>
            <Footer />
        </>
           )
}