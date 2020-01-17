import React from "react";

export default class extends React.Component
{
    state =
    {
        edited :false
    }

    render()
    {
        const { settings } = this.props;
        return(
            <li>
                <input
                    type="checkbox"
                    onChange=
                    { 
                        e => this.setState( { edited : e.target.checked } ) 
                    }
                />
                { settings.name }
            </li>
        )
    }
}