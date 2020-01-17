import React from "react";

export default class extends React.Component
{
    state =
    {
        edited :false
    }

    /**
     * Handle the checkbox change event
     * ! WARNING ! Don't use method and bind()
     * Use arrow functions that binds the this context automatically
     */
    checkboxHasChanged = e =>
    {
        this.setState
        (
            { edited : e.target.checked }
        );         
    }

    render()
    {
        const { settings } = this.props;
        return(
            <li>
                <input
                    type="checkbox"
                    onChange={ this.checkboxHasChanged }
                />
                { settings.name }
            </li>
        )
    }
}