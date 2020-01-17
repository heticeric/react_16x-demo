import React from 'react';
import './App.css';
import Student from "./components/Student";

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
      <ul>
        {
          students.map
          (
            s => <Student key={ s.id } settings={ s } />
          )
        }
      </ul>
    </div>
  );
}

export default App;
