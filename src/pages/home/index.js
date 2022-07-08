import React from "react"
import Nav from '../../components/global/Nav'
import Sidebar from '../../components/global/sidebar'
import Footer from '../../components/global/Footer'
import Content from "../../components/global/Content"
// import Content from '../Content'
export default function Home()




{
    return (
        <>
            <Nav>Home</Nav>
            <Sidebar />
            <Content>
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        tes
                    </div>
                    <div className="card-body">
                        <h2>Home</h2>
                    </div>
                    
                </div>
            </Content>
            <Footer />

        </>
           )
}