import { ChangeEvent } from 'react';

export interface ITextFieldProps
{
    label? : string;
    onChange: (value : string) => void;

}

export const TextField = (props : ITextFieldProps) => 
{
    const changeTextField = (value: string) => {
        props.onChange(value);
    };
    return (
        <>
        { props.label &&  
            <label>
                {props.label}
            </label>
        }
        <input type="text" onChange={(e) => changeTextField(e.target.value)}></input>
        </>
    )

}