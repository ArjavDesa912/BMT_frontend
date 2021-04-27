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
        <label>Team Name &nbsp;</label> 
        <input
          type='text'
          placeholder='Add Team Name'
          value={CName}
          onChange={(e) => setCname(e.target.value)}
        />
      </div>
  
     <div className='form-control'>
        <label>Team type &nbsp;</label>
        <input
          type='text'
          placeholder='Add team type'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      
      <input color="primary" type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTeam