import React,{useState} from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'

function App() {
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

  
  return (
    <div>

      <Header title="Student List"  major="major"/>
      <StudentList data={data} deleteData={deleteData} />

    </div>
  )
}

export default App