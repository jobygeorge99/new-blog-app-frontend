import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [data,setData] = new useState(
        {
            "name":"",
            "age":"",
            "phone":"",
            "address":"",
            "pincode":"",
            "emailid":"",
            "password":""
        }
    )

    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const sendData = ()=>{
        axios.post("http://localhost:3001/api/blog/signUp",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Login succesfful")
                setData(
                    {
                        "name":"",
                        "age":"",
                        "phone":"",
                        "address":"",
                        "pincode":"",
                        "emailid":"",
                        "password":""
                    })
            } else {
                alert(response.data.status)
                
            }
        })
    }

  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={sendData}>Sign Up</button>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                           <Link to="/" className=""> To go Back to Login, Click Here </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup