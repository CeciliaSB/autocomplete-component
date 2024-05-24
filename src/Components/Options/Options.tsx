import {SetStateAction, useState} from "react";
import {MovieOptionsProps} from "./types/types";

interface Option {
    label: string | string[];
    value: string;
}

export default function Options({selected, options, onChange, isOpen, query}: MovieOptionsProps) {
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const highlightMatches = (text: string, query: string) => {
        if (!query) return text; // If no query, return the original text
        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);

        // Return an array of React elements or strings
        return parts.map((part, index) =>
            regex.test(part)
                ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
                : part
        );
    };

    return (
        <ul className={`options-style ${isOpen ? "show" : ""}`}>
            {options.map((option, index ) => (
                <li key={option.value}
                    onClick={(event) => onChange(option, event)}
                    className={`movie-option ${option.value === selected?.value ? 'selected' : ''} ${index === highlightedIndex ? 'highlighted' : ''}`}
                    onMouseEnter={()=> setHighlightedIndex(index)}
                >
                    {typeof option.label === 'string' ? highlightMatches(option.label, query) : option.label}
                </li>
            ))}
        </ul>
    );
}


