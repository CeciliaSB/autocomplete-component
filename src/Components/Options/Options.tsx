import {SetStateAction, useState} from "react";
import {OptionsProps} from "./types/types";

interface Option {
    label: string | string[];
    value: string;
}

export default function Options({selected, options, onChange, isOpen, query}: OptionsProps) {
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const highlightMatches = (text: string, query: string) => {

        if (!query) return text;

        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);

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
                    {highlightMatches(option.label, query)}
                </li>
            ))}
        </ul>
    );
}


