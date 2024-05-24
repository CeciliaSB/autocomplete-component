import React, {FocusEventHandler, useEffect, useRef, useState} from "react";
import TextInput from "./Components/TextInput/TextInput";
import Options from "./Components/Options/Options";
import './Styles/style.css'
import {SelectOption} from "./Components/Options/types/types";


const options = [
    {value: "1", label: "The Lord of the Rings: The Fellowship of the Ring"},
    {value: "2", label: "The Lord of the Rings: The Two Towers"},
    {value: "3", label: "The Lord of the Rings: The Return of the King"},
    {value: "4", label: "Blade Runner"},
    {value: "5", label: "Blade Runner 2049"},
    {value: "6", label: "Alien"},
    {value: "7", label: "Aliens"},
    {value: "8", label: "Alien 3"},
    {value: "9", label: "Prometheus"},
    {value: "10", label: "Alien: Covenant"},
    {value: "11", label: "Batman Begins"},
    {value: "12", label: "The Dark Knight"},
    {value: "13", label: "The Dark Knight Rises"},
    {value: "14", label: "The Matrix"},
    {value: "15", label: "The Matrix Reloaded"},
    {value: "16", label: "The Matrix Revolutions"},
    {value: "17", label: "The Matrix Resurrections"},
    {value: "18", label: "Kill Bill: Volume 1"},
    {value: "19", label: "Kill Bill: Volume 2"},
    {value: "20", label: "Dune"},
    {value: "21", label: "Dune: Part Two"},

]

function App() {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filtered = options.filter(option =>
                typeof option.label === 'string'
                    ? option.label.toLowerCase().includes(inputValue.toLowerCase())
                    : (option.label as string[]).some((part: string) => part.toLowerCase().includes(inputValue.toLowerCase()))
            );
            setFilteredOptions(filtered);
        }, 300); // Debounce delay
        return () => clearTimeout(timeoutId);
    }, [inputValue]);



    function handleChange(event: any) {
        setInputValue(event.target.value);
        setIsOpen(true);
    }

    function handleSelectedOption(option: SelectOption | undefined) {
        if (option) {
            setInputValue(typeof option.label === 'string' ? option.label : option.label.join(' '));
            setSelectedOption(option);
        }
        setIsOpen(false);
    }
    function clearInput() {
        setInputValue('');
        setSelectedOption(undefined);
        setIsOpen(false);
    }

    const handleBlur: FocusEventHandler<HTMLDivElement> = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
            setIsOpen(false);
        }
    }

    return (
        <div className='container' >
            <h1 className="title">Auto-complete App</h1>
            <div className='search-wrapper' ref={containerRef} onBlur={handleBlur} tabIndex={-1}>
                <TextInput
                    value={inputValue}
                    onChange={handleChange}
                    setIsOpen={setIsOpen}
                    clearInput={clearInput}
                    className='search-bar'
                    tabIndex={0}
                />
                <Options
                    isOpen={isOpen}
                    options={filteredOptions}
                    onChange={handleSelectedOption}
                    selected={selectedOption}
                    query={inputValue}
                />
            </div>
        </div>
    );
}


export default App;

