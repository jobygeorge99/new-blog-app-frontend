import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPosts = () => {

    const [data,setData]=new useState([])

    const getData=()=>{
        axios.get("http://localhost:3001/api/post/viewAll").then((response)=>{
            console.log(response.data)
            console.log(response.data)
            setData(response.data)
        })
    }

    useEffect(()=>{getData()},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map((value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{value.userid.name}</h5>
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

export default ViewPosts