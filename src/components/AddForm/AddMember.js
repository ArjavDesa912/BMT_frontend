import { useState } from 'react'
import React from 'react';
const AddTeam = ({ onAdd }) => {
  const [CName, setCname] = useState('')
  const [Pname, setPname] = useState('')
  const [Location, setLocation] = useState('')
  const [Price, setPrice] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!CName) {
      alert('Please add a task')
      return
    }

    onAdd({ CName,Pname,Location,Price })

    setCname('')
    setLocation('')
    setPname('')
    setPrice('')
  }
// 	Company Name
//  Product Name
//  Location
//  Price
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Employee Name &nbsp;</label> 
        <input
          type='text'
          placeholder='Add Employee Name'
          value={CName}
          onChange={(e) => setCname(e.target.value)}
        />
      </div>
  
     <div className='form-control'>
        <label>Post &nbsp;</label>
        <input
          type='text'
          placeholder='Add Post'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Current Task &nbsp;</label>
        <input
          type='text'
          placeholder='Add Current Task'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Salary &nbsp;</label>
        <input
          type='text'
          placeholder='Add Salary'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTeam