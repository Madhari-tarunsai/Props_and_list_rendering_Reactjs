import React from 'react'

const Students = (x) => {
    console.log(x)
  return (
    <>
      <h1>{x.para1.name}  {x.para1.age}</h1>
     <h1> {x.para2}</h1>
    </>
  )
}

export default Students
