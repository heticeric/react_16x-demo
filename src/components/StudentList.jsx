import React from "react";
import Student from "./Student";
import StudentContext from "./StudentsContext";

export default () => 
{
     // Context provider
     const students = React.useContext( StudentContext ).studentsList;

    return(
        <ul>
        {
            students
            && students.map
            (
                s => 
                    <Student 
                        key={ s.id } 
                        settings={ s }
                        selected={ s.selected }
                    />
            )
        }
        </ul>
    )
}