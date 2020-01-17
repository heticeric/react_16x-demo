import React from "react";

export default ( { settings } ) =>
{
    // Internal states
    const [ edited, setEdited ] = React.useState( false );
    const [ name, setName ] = React.useState( settings.name );

    /**
     * Handle the checkbox change event
     * 
     * @param e Event object
     */
    const checkboxHasChanged = e =>
    {
        setEdited( e.target.checked );         
    }

    /**
     * Handle the input changing value
     * 
     * @param e Event object
     */
    const inputHasChanged = e =>
    {
        setName( e.target.value );
    }

    return(
        <li>
            <input
                type="checkbox"
                onChange={ checkboxHasChanged }
            />
            {
                edited
                ? <input 
                        type="text" 
                        value={ name }
                        onChange={ inputHasChanged }
                    />
                : name
            }
        </li>
    );
}