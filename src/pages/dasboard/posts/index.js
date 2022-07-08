import axios from "axios"
import React, { useState, useEffect } from "react"
import Content from "../../../components/global/Content"
import Footer from "../../../components/global/Footer"
import Nav from "../../../components/global/Nav"
import Sidebar from "../../../components/global/sidebar"
export default function Posts()
{
    const [Posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
                let response = await axios.get(
                    'http://localhost:8000/api/posts'
                )
            setPosts(response.data)
            } catch (e) {
                 console.log(e.message)
                }
            }
            useEffect(() => {
                getPosts()
            }, [])

    return (
     <>
            <Nav>
                Posts
            </Nav>
            <Sidebar />
            <Content>
               
                Posts
                <div className="card mt-4">
                    <div className="card-header bg-info">
                        Posts
                    </div>
                    <div className="card-body">
                        <h2>Posts</h2>
                        {Posts.map((post, id )=> {
                                return (
                                    <ol key={id}>
                                        <li>{post.judul}</li>
                                        <li>{post.disceripsi}</li>
                                        <li>{post.gambar}</li>
                                    </ol>
                                )
                            })}
                    </div>
                    
                </div>
                
            </Content>
            <Footer />
        </>
)
}