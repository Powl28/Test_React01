import React, { useState } from "react";
import "./AddForm.css";

export default function AddForm({ addData }) {
  const [name, setName] = useState();
  const [gender, setGender] = useState();


  const onAdd = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.floor(Math.random() * 9999),
      name: name,
      gender:gender
    };
    console.log(name);
    addData(newStudent);
  };

  return (
    <section className="container">
      <form onSubmit={onAdd}>
        <div className="addform">
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            value={name}
          />
          <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-select select">
            <option disabled>Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
