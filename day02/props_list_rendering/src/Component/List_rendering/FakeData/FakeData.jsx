import React from 'react'

const FakeData = () => {
    const fake=[
        {
          "id": 1,
          "name": "Tarunsai Madhari",
          "role": "Frontend Developer",
          "email": "tarunsai@example.com",
          "location": "Hyderabad"
        },
        {
          "id": 2,
          "name": "Sneha Rao",
          "role": "UI/UX Designer",
          "email": "sneha.rao@example.com",
          "location": "Bangalore"
        },
        {
          "id": 3,
          "name": "Karthik Reddy",
          "role": "Python Developer",
          "email": "karthik.reddy@example.com",
          "location": "Chennai"
        },
        {
          "id": 4,
          "name": "Aisha Khan",
          "role": "React Developer",
          "email": "aisha.khan@example.com",
          "location": "Pune"
        },
        {
          "id": 5,
          "name": "Rohit Mehta",
          "role": "DevOps Engineer",
          "email": "rohit.mehta@example.com",
          "location": "Delhi"
        }
      ]
      
  return (
    <div>
       {fake.map((x) => (
        <div key={x.id}>
          <h1>{x.name}</h1>
          <p>{x.role}</p>
          <p>{x.email}</p>
          <p>{x.location}</p>
        </div>
      ))}
    </div>
  )
}

export default FakeData
