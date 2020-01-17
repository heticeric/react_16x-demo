import React from "react";
import Student from "./Student";

export default ( { students } ) => 
(
    <ul>
    {
        students.map
        (
            s => <Student key={ s.id } settings={ s } />
        )
    }
    </ul>
)