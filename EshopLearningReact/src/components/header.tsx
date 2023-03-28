import React from "react";

export const Header = (props : {header : string; name? : string; }) => {
    return (
        <div>
            <h1>
                {props.header} {props.name}
            </h1>
        </div>
    )
}
