import React from 'react';
import './App.css';
import StudentList from "./components/StudentList";
import StudentsContext from "./components/StudentsContext";

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
      <StudentsContext.Provider
        value={ students } >
        <StudentList students={ students } />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
