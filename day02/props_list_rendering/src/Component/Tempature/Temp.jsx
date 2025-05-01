import React from 'react'

const Temp = (T1) => {
    console.log(T1)
    const data=T1
  return (
    <div>
      <h1>{data.t3.day}</h1>
      <h1>{data.t3.time}</h1>
      <h1>{data.t3.condition}</h1>
    </div>
  )
}

export default Temp
