import React from "react";

const ObjectArray = () => {
  const obj = [
    {
      id: 8,
      name: "tarunsai",
      role: "reactdev",
    },
    {
      id: 2,
      name: "sai",
      role: "python",
    },
  ];
  
  return (
    <div>
      {obj.map((p, index) => {
        console.log(p);
        return (
          <div key={index}>
            <h1>{p.name}</h1>
            <p>{p.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ObjectArray;
