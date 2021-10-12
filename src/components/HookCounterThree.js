import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          //   onChange={(e) => {
          //     setName({ ...name, firstName: e.target.value });
          //   }}
          name="firstName"
          onChange={changeHandler}
        />
        <input
          type="text"
          value={name.lastName}
          //   onChange={(e) => {
          //     setName({ ...name, lastName: e.target.value });
          //   }}
          name="lastName"
          onChange={changeHandler}
        />
        <h2>Your first name is: {name.firstName}</h2>
        <h2>Your last name is: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
