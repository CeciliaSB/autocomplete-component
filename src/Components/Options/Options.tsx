import {useState} from "react";
import {MovieOptionsProps} from "./types/types";

interface Option {
    label: string | string[];
    value: string;
}

export default function Options({ selected, options, onChange, isOpen }: MovieOptionsProps) {
    return (
        <ul className={`options-style ${isOpen ? "show" : ""}`}>
            {options.map(option => (
                <li key={option.value}
                    onClick={(event) => onChange(option, event)}
                    className={`movie-option ${option.value === selected?.value ? 'selected' : ''}`}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    );
}


/*export function filterOptions(search: string, options: Option[]): Option[] {
    return options.map(option => {
        if (typeof option.label === 'string') {
            option.label = option.label.split(new RegExp(`(${search})`, "i")).filter(Boolean);
        }
        return option;
    }).filter(option => typeof option.label === 'string' && option.label.includes(search));
}*/

/*{option.label}*/
