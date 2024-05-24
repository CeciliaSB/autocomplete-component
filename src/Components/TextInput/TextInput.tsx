import React, { useState } from 'react';
import  {ReactComponent as MagnifyingIcon} from "../../Assets/magnifying-glass-svgrepo-com (1).svg";


interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    clearInput: () => void;
}

export default function TextInput({ setIsOpen,onChange,value, clearInput, ...props}: TextInputProps) {
    const [inputValue, setInputValue] = useState ('')
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChange) {
            onChange(event);
        }
    }

    return (
        <div>
            <input {...props}
                   onChange={handleChange}
                   value={value}
                   onClick={() => setIsOpen(prev => !prev)}
                   type="text"
                   placeholder="Search"
            />
            <MagnifyingIcon className="search-icon"/>
            {value && (
                <div className='clear-btn-container' style={{ display:'flex', alignItems:'center'}}>

                    <button
                        onClick={clearInput}
                        className='clear-btn'
                    >
                        &times;
                    </button>
                    <div
                        style={{ height: '20px', width: '1px', backgroundColor: '#777'}}
                    >
                    </div>
                </div>
            )}
        </div>
    )
}