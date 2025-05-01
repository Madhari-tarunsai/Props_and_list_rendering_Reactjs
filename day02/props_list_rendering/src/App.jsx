import React from "react";
import Students from "./Students";
import Temp from "./Component/Tempature/Temp";
import Friuts from "./Component/Friuts/Friuts";
import Childprops from "./Component/Childprops/Childprop";
import StrArray from "./Component/List_rendering/StrArray";
import NumArray from "./Component/List_rendering/NumArray";
import ObjectArray from "./Component/List_rendering/ObjectArray";
import FakeData from "./Component/List_rendering/FakeData/FakeData";
import FoodData from "./Component/List_rendering/FoodData/FoodData";

const App = () => {
  const child = 6;
  const s1 = {
    name: "tarunsai",
    age: 34,
  };
  const s2 = "tejasai";

  const sumer = {
    day: "Monday",
    time: "4:00pm",
    condition: "56c",
  };
  const sumer1 = {
    season: "summer",
    friut: "mango",
  };

  return (
    <>
      <Childprops>{child}</Childprops>
      <Students para1={s1} para2={s2} para3={sumer} />
      <Temp t3={sumer} />
      <Friuts F1={sumer1}></Friuts>
      <StrArray />
      <NumArray />
      <ObjectArray />
      <FakeData />
      <FoodData />
    </>
  );
};

export default App;
