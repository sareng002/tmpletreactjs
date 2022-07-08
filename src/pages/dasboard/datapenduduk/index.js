import React from "react"
import Content from "../../../components/global/Content"
import Footer from "../../../components/global/Footer"
import Nav from "../../../components/global/Nav"
import Sidebar from "../../../components/global/sidebar"
export default function DataPenduduk()
{
    return (
        <>
          <Nav>Data Penduduk</Nav>
            <Sidebar />
            <Content>
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        Data Penduduk
                    </div>
                    <div className="card-body">
                        <h2>Data Penduduk</h2>
                    </div>
                </div>
            </Content>
            <Footer />
        </>
           )
}