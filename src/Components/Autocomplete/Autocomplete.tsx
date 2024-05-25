import React, {FocusEventHandler, useEffect, useRef, useState} from "react"
import TextInput from "../TextInput/TextInput";
import Options from "../Options/Options";
import {Option} from "../Options/types/types";
import {AutocompleteProps} from "./types/types";

export default function Autocomplete ({options, onChange, selected}: AutocompleteProps){

    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlled = typeof onChange === "function"

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filtered = options.filter(option =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredOptions(filtered);
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);



    function handleChange(event: any) {
        setInputValue(event.target.value);
        setIsOpen(true);
    }

    function handleSelectedOption(option: Option | undefined) {
        if (option) {
            setInputValue( option.label);
            if(controlled){
                onChange(option)
            }else{
                setSelectedOption(option);
            }

        }
        setIsOpen(false);
    }
    function clearInput() {
        setInputValue('');
        if(controlled){
            onChange(undefined)
        }else{
            setSelectedOption(undefined);
        }

        setIsOpen(false);
    }

    const handleBlur: FocusEventHandler<HTMLDivElement> = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
            setIsOpen(false);
        }
    }


    return (
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
                selected={controlled ? selected : selectedOption}
                query={inputValue}
            />
        </div>
    )
}