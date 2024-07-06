import React, { useState } from "react";
import "./StudentList.css";

function StudentList() {
  let students = [];

  for (let index = 0; index < 5; index++) {
    let student = {
      id: index,
      name: "STUDENT_" + index,
    };

    students.push(student);
  }

  const [data, setData] = useState(students);
  const [show, setShow] = useState(true);

  const deleteData = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  const table = () => (
    <table class="table  table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() => deleteData(item.id)}
                className="btn btn=danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <main>
        <div className="summary">
        <p style={{backgroundColor:'cyan',fontStyle:'italic'}}>AllStuden : {data.length}</p>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="btn btn=success"
          >
            {show ? "HIDDEN" : "SHOW"}
          </button>
        </div>
        {show && table()}
    </main>
  );
}

export default StudentList;
