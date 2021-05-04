import { useState } from 'react'
import React from 'react';
const AddTax = ({ onAdd }) => {
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
        <label>Order ID &nbsp;</label> 
        <input
          type='text'
          placeholder='Add OrderID'
          value={CName}
          onChange={(e) => setCname(e.target.value)}
        />
      </div>
  
     <div className='form-control'>
        <label>Company Name &nbsp;</label>
        <input
          type='text'
          placeholder='Add Company Name'
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Product Name &nbsp;</label>
        <input
          type='text'
          placeholder='Add Product Name'
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price &nbsp;</label>
        <input
          type='text'
          placeholder='Add Price'
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <input type='submit' value='Done' className='btn btn-block' />
    </form>
  )
}

export default AddTax