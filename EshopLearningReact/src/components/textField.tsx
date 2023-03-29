import { ChangeEvent } from 'react';

export interface ITextFieldProps
{
    label? : string;
    onChange: (event : any) => void;

}

export const TextField = (props : ITextFieldProps) => 
{
    //const changeTextField = (event: any) => {
    //   props.onChange();
    //};
    return (
        <>
        { props.label &&  
            <label>
                {props.label}
            </label>
        }
        <input type="text" onChange={props.onChange}></input>
        </>
    )

}