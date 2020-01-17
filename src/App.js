import React from 'react';
import './App.css';
import StudentList from "./components/StudentList";

const students = 
[
  {
    id :1
    ,name:"eric"
  }
  ,{
    id :2
    ,name:"antoine"
  }
  ,{
    id :3
    ,name:"hélène"
  }
  ,{
    id :4
    ,name:"yves"
  }
  ,{
    id :5
    ,name:"bastien"
  }
  ,{
    id :6
    ,name:"namiko"
  }
];

function App() {
  return (
    <div className="App">
      <StudentList students={ students } />
    </div>
  );
}

export default App;
