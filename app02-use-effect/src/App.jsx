import React,{useEffect, useState} from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [Text, setText] = useState('Empty')

  const TextChange = ()=>{

   let Temp = count<0? 'Negitive Below 0':'';
   
    setText(Temp);



  }

const increase = ()=>setCount(count+1)
const Reset = ()=>{setCount(0);setText('Empty')}
const Decrease = ()=>setCount(count-1)

 

  useEffect(() => {
    console.log("1.do first and last time");
  }, []);



  useEffect(() => {
    console.log("2.do first and every State change ");
    TextChange();
  });


  useEffect(() => {
    console.log("3.do first and  depent"+count);
  }, [count==10],Text);


  

  return (
    <div className='container'>
      <h2 className='text-count'>{Text}</h2>
      <h2 className='text-count'>{count}</h2>
      <div>
        <button onClick={increase} className="btn btn-success">Increase</button>
        <button onClick={Reset} className="btn btn-primary">Reset</button>
        <button onClick={Decrease} className="btn btn-danger">Decrease</button>
      </div>
    </div>
  );
}

export default App