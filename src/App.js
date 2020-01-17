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

students.map
(
  s => Object.assign( s, { selected : false } )     
);

function App()
{
    // Internal state
    const [ studentsList, setStudents ] = React.useState( students );

    /**
     * Retrieve the clicked student from the child components
     * Lift the state up to manage selection from the items
     * The method is auto-curried
     * @see https://www.sitepoint.com/currying-in-functional-javascript/
     * @param {Number} id ID of the student
     */
    const highlightItem = id => () =>
    {      
      const studentsSettings 
          = studentsList.map
          (
              s => 
                  id === s.id 
                  ? Object.assign( s, { selected : true } )
                  : Object.assign( s, { selected : false } )
          );
      console.log( studentsSettings );    
      setStudents( studentsSettings );
    }

  return (
    <div className="App">
      <StudentsContext.Provider
        value={ { studentsList, highlightItem } } >
        <StudentList/>
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
