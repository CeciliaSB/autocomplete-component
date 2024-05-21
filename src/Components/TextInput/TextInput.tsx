import React, { useState } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TextInput({ setIsOpen,onChange,value, ...props}: TextInputProps) {
    const [inputValue, setInputValue] = useState ('')
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChange) {
            onChange(event); // Call the parent's onChange, which updates inputValue in App
        }
    }

    return (
            <input {...props}
                   onChange={handleChange}
                   value={value}
                   onClick={() => setIsOpen(prev => !prev)}
                   type="text"
                   placeholder="Search"
            />
    )
}