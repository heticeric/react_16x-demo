import React from "react";
import Student from "./Student";

export default ( { students } ) => 
{
    // Create an indirection from the props and its internal state
    // ! Note ! Using the props as default value is an anti-pattern
    // It wiil prevent the data to ever change… (try it for yourself)
    // ! DONTDOTHIS ! const [ studentsList, setStudents ] = React.useState( students );
    const [ studentsList, setStudents ] = React.useState( [] );

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
     * @param {Number} id ID of the student
     */
    const highlightItem = id =>
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