import {Option} from "../../Options/types/types";

export type AutocompleteProps ={
    options: Option[];
    onChange: (option: Option | undefined) => void;
    selected: Option | undefined;
}