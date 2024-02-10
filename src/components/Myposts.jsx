import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Myposts = () => {

    const [data,setData]=new useState(
        {
            "userid":sessionStorage.getItem("userId")
        }
    )

    const [posts,setPosts]=new useState([])

    const getPosts=()=>{
        axios.post("http://localhost:3001/api/post/view-myposts",data).then((response)=>{
                setPosts(response.data)
        })
    }

    useEffect(()=>{getPosts()},[])

  return (
    <div>
        
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            posts.map((value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2 text-body-secondary">{value.postedDate}</h6>
                                            <p className="card-text">{value.post}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Myposts