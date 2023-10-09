import React from 'react'

const AddDetails = () => {

    const addFlight = ()=>{

    }
  return (
    <div className="add-details">
        <div className="container">
          <input type="text" placeholder='Write Source' /> 
          <input type="text" placeholder='Write Destination' /> 
          <input type="text" placeholder='Write Flight Number' />
          <button onClick={addFlight}>Add Flight</button>

          <div className="cost">
            <input type="text" placeholder='source' />
            <input type="text" placeholder='destination' />
            <div className="prev-cost">Previous Amount <span className='cost'>234</span></div>
            <input type="number" placeholder='Write New Amount' /><br />
            <button>Update Price</button>
          </div>
        </div>

      </div>
  )
}

export default AddDetails