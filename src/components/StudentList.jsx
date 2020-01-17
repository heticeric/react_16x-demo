import React from "react";
import Student from "./Student";
import StudentContext from "./StudentsContext";

export default () => 
{
    // Internal state
     const [ studentsList, setStudents ] = React.useState( [] );
     // Context provider
     const students = React.useContext( StudentContext );

    // Use a side effect on the prop's data
    React.useEffect
    (
        () =>
        {
            // Ajout d'une nouvelle propriété dans la props
            const studentsWithSelection = students.map
            (
                s => Object.assign( s, { selected : false } )     
            );
            setStudents( studentsWithSelection );
        }, students
    )

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
        setStudents( studentsSettings );
    }

    return(
        <ul>
        {
            students.map
            (
                s => 
                    <Student 
                        key={ s.id } 
                        settings={ s }
                        highlight={ highlightItem }
                        selected={ s.selected }
                    />
            )
        }
        </ul>
    )
}