import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    // const {fName,lName,email} = event.target;
    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          email: prevValue.email,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          email: prevValue.email,
          lName: newValue
        };
      } else if (inputName === "email") {
        return {
          fName: prevValue.fName,
          email: newValue,
          lName: prevValue.lName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          Value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
