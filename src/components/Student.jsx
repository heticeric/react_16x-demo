import React from "react";

export default class extends React.Component
{
    state =
    {
        edited :false
        ,name : this.props.settings.name
    }

    /**
     * Handle the checkbox change event
     * ! WARNING ! Don't use method and bind()
     * Use arrow functions that binds the this context automatically
     * 
     * @param e Event object
     */
    checkboxHasChanged = e =>
    {
        this.setState
        (
            { edited : e.target.checked }
        );         
    }

    /**
     * Handle the input changing value
     * 
     * @param e Event object
     */
    inputHasChanged = e =>
    {
        this.setState
        (
            { name : e.target.value }
        );
    }

    render()
    {
        return(
            <li>
                <input
                    type="checkbox"
                    onChange={ this.checkboxHasChanged }
                />
                {
                    this.state.edited
                    ? <input 
                            type="text" 
                            value={ this.state.name }
                            onChange={ this.inputHasChanged }
                        />
                    : this.state.name
                }
            </li>
        )
    }
}