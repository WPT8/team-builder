import React, { useState } from "react";

const Form = props => {
  const initialMember = { name: "", email: "", role: "" };
  const [newMember, setNewMember] = useState(initialMember);

  const handleChange = event => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newMember.name || !newMember.email) {
      alert("Please fill out both fields!");
    } else {
      props.setMembers([newMember, ...props.members]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewMember(initialMember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newMember.name}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={newMember.email} 
        />

        <select value={newMember.role} >
          <option value="fullStack">Full Stack Developer</option>
          <option value="frontEnd">Front End Developer</option>
          <option value="backEnd">Back End Developer</option>
         </select>

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};  

    export default Form;