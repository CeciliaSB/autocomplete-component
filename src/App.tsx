import React, {SetStateAction, useEffect, useMemo, useState} from "react";
import TextInput from "./Components/TextInput/TextInput";
import Options from "./Components/Options/Options";
import './Styles/style.css'
import {ReactComponent as MagnifyingIcon} from "./Assets/magnifying-glass-svgrepo-com (1).svg"
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

// some function to filter the values
// i need to check each option.label and see if it matches input
// if it does, split the string into an array
// so that your options are: {value : 21, label : ["The", " Matrix Reloaded"]}

function App() {
    const [title, setTitle] = useState('Auto-complete App');
    const [inputValue, setInputValue] = useState(''); // This holds the input value
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleButtonClick(event: any) {
        console.log(event);
        if (title === 'Hello') {
            setTitle('Hola');
        } else if (title === 'Hola') {
            setTitle('Hello');
        }
    }
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
    }

    function handleSelectedOption(option: SelectOption | undefined) {
        if (option) {
            setInputValue(typeof option.label === 'string' ? option.label : option.label.join(' '));
            setSelectedOption(option);
        }
        setIsOpen(false);
    }

    return (
        <div className='container'>
            <h1 className='title'>{title}</h1>
            <div className='search-wrapper'>
                <TextInput value={inputValue} onChange={handleChange} setIsOpen={setIsOpen} className='search-bar' tabIndex={0}/>
                <button onClick={handleButtonClick} className='search-btn'>
                    <MagnifyingIcon />
                </button>
                <Options isOpen={isOpen} options={filteredOptions} onChange={handleSelectedOption} selected={selectedOption} />
            </div>
        </div>
    );
}


export default App;


