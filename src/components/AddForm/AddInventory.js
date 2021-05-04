import { useState } from 'react'
import React from 'react';
const AddInventory = ({ onAdd }) => {
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
        <label>Reference &nbsp;</label> 
        <input
          type='text'
          placeholder='Add Reference'
          value={CName}
          onChange={(e) => setCname(e.target.value)}
        />
      </div>
  
     <div className='form-control'>
        <label>Destination Location &nbsp;</label>
        <input
          type='text'
          placeholder='Add Destination Location'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Scheduled Date &nbsp;</label>
        <input
          type='text'
          placeholder='Add Scheduled Date'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Status &nbsp;</label>
        <input
          type='text'
          placeholder='Add Status'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      
      <input type='submit' value='Done' className='btn btn-block' />
    </form>
  )
}

export default AddInventory