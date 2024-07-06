import React, { useState } from "react";

function App() {
  let students = [];

  for (let index = 0; index < 5; index++) {

    let student = {
      id : index,
      name : "student" + index,
    };
    
    students.push(student);
  }

  const [data, setData] = useState(students);

  const deleteData = (id)=>{
    setData(data.filter((item)=>item.id != id))
  } 

  return (
    <div>
       <table class="table  table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">ACTION</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item)=>
          (
             <tr key={item.id} >
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td><button onClick={()=>deleteData(item.id)} className="btn btn=danger">Delete</button></td>
        </tr>
          ))}
      </tbody>
    </table>
    </div>

   
  );
  
}

export default App;
