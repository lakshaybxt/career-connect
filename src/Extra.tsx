import React, { useState } from 'react'

const Extra = () => {
  const [name, setName] = useState<string>("") 
  const [submittedName, setSubmittedName] = useState<string>("") 

  return (
    <>
      <div className='text-5xl'>App</div>

      <p className='yo'>Hello {submittedName}!</p>

      <input
        type="text"
        className='in bg-amber-200 rounded-2xl color'
        value={name}
        onChange={(e) => setName(e.target.value)} // update state when typing
      />

      <button
        className='rounded-2xl bg-blue-400 ml-2 p-2'
        onClick={() => setSubmittedName(name)} // set submitted value
      >
        Submit
      </button>
    </>
  )
}

export default Extra
