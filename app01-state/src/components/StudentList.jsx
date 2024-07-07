import React, { useState } from "react";
import "./StudentList.css";

function StudentList({data,deleteData}) {
    
  const [show, setShow] = useState(true);



  const table = () => (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">GENDER</th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.gender}</td>
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
        <p style={{ backgroundColor: "cyan", fontStyle: "italic" }}>
          AllStudent : {data.length}
        </p>
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
