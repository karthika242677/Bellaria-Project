import React, { useContext } from 'react'
import {Link}from 'react-router-dom'
import { MyContext } from '../context/ContextProvider'

const User = () => {
  const{userData,RemoveUser}=useContext(MyContext)
  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-between my-3 align-items-center">
        <h3>Products List</h3>
        <Link to={"/"}className='fs-5'>Add Products</Link>
      </div>
      <table className='table table-primary text-center align-middle'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          userData.map((value,index)=>{
            return(
              <tr key={index}>
          <td>{value.username}</td>
          <td>{value.password}</td>
          <td>{value.email}</td>
          <td><span className='fs-4 text-danger'onClick={()=>RemoveUser(value._id)}>&times;</span></td>
        </tr>
            )
          })
        }
      </tbody>
      </table>
    </div>
    </>
  )
}

export default User