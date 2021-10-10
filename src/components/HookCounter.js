import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   comments: "",
  //   topic: "React",
  // })

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }

  // console.log(formData);

  return (
    // <form>
    //   <button type="submit" onClick={(e) => {
    //     e.preventDefault();
    //     setCount(count + 1);
    //     }}>Count {count}</button>
    //   <input value={formData.username} onChange={handleChange} name="username" />
    // </form>
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
