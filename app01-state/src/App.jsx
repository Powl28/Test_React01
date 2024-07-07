import React, { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/AddForm";

function App() {
  let students = [];

  const gen = ["male","female"]

  for (let index = 0; index < 5; index++) {

    const num = Math.floor(Math.random()*2)

    let student = {
      id: index,
      name: "STUDENT_" + index,
      gender : gen[num],
    };

    students.push(student);
  }

  const [data, setData] = useState(students);

  const addData = (newStudent) => {
    setData([...data, newStudent]);
  };

  const deleteData = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div>
      <Header title="Student List" major="major" />
      <AddForm addData={addData} />
      <StudentList data={data} deleteData={deleteData} />
    </div>
  );
}

export default App;
