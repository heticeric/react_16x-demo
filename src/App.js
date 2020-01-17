import React from 'react';
import './App.css';

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
            s => <li key={ s.id }>{ s.name }</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
