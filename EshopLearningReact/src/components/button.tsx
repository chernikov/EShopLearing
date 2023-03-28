import React from 'react';

export interface IButtonProps {
    value : string;
    onClick : () => void;
};

export const Button = (props : IButtonProps) => {

    const anyEvent = (value : any) => {
        props.onClick();
    }

    return (
        <>
            <div style={{"marginBottom" : "120px"}}>
            <input type="button" value={props.value} onClick={anyEvent}/>
            </div>
        </>
    );
}