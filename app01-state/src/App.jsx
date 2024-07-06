import React, { useState } from "react";

function App() {
  let students = [];

  for (let index = 0; index < 5; index++) {

    let student = {
      id : index,
      name : "STUDENT" + index,
    };
    
    students.push(student);
  }

  const [data, setData] = useState(students);

  const [show, setShow] = useState(true)

  const deleteData = (id)=>{
    setData(data.filter((item)=>item.id != id))
  } 

  const table = ()=>(     
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
  </table>)


  return (
    <div>
   
    {show && table()}


    <td><button onClick={()=>setShow(!show)} className="btn btn=danger">{show ?"HIDDEN":"SHOW"}</button></td>

    </div>

   
  );
  
}

export default App;
