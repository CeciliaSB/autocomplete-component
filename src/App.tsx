import React, {useState} from "react";
import './Styles/style.css'
import Autocomplete from "./Components/Autocomplete/Autocomplete";
import {Option} from "./Components/Options/types/types";


const options = [
    {value: "1", label: "The  Lord of the Rings: The Fellowship of the Ring"},
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
    const [selectedOption, setSelectedOption] = useState<Option | undefined>(undefined);
    return (
        <div className='container' >
            <h1 className="title">Auto-complete App</h1>
            <Autocomplete
                onChange ={(option)=>setSelectedOption(option)}
                selected = {selectedOption}
                options={options}
            />
        </div>
    );
}


export default App;

