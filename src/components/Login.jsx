import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [data,setData]= new useState(
        {
            "emailid":"",
            "password":""
        }
    )

    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const sendData = ()=>{
        axios.post("http://localhost:3001/api/blog/signIn",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Login succesfful")
                
                console.log(response.data.userData._id)
                sessionStorage.setItem("userId",response.data.userData._id)
                navigate("/addpost")

                // setData(
                //     {
                //         "emailid":"",
                //         "password":""
                //     })

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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={sendData}>Login</button>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                           <Link to="/signup" className=""> New User? Click Here </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login