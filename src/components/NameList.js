import React from "react";
import Name from "./Name";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <Name key={name} name={name} />);

  //   const nameList = names.map((name) => <h4>{name}</h4>);
  return (
    <div>
      {nameList}

      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1> */}
    </div>
  );
}

export default NameList;
