import React from "react";

const Childprop = (y) => {
  console.log(y);

  return (
    <div>
      <p>{y.children}</p>
    </div>
  );
};

export default Childprop;
