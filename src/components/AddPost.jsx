import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPost = () => {

    const [data,setData]= new useState(
        {
            "userid":"",
            "post":""
        }
    )

    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const sendData = ()=>{
        axios.post("http://localhost:3001/api/post/add",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Post submitted succesfful")
                
            

            } else {
                
                alert("Error")
                
            }
        })
    }

  return (
    <div>
        <NavBar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Post:</label>
                        <br/>
                        <textarea name="post" value={data.post} onChange={inputHandler} cols="60" rows="10" ></textarea>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={sendData}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
       </div>
        
    </div>
  )
}

export default AddPost