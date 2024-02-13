import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    let userid = sessionStorage.getItem("userId")
    if (userid===null || userid==undefined) {
      navigate("/")
    }
  })

  const logOutAction = ()=>{
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/addpost">Add Post</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/viewposts">View All Posts</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/myposts">View My Posts</Link>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link" onClick={logOutAction}>Logout</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    </div>
  )
}

export default NavBar