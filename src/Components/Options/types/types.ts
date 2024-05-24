import React from "react";

export type SelectOption = {
    label: string | string[]
    value: any
}
export type MovieOptionsProps = {
    options: SelectOption []
    selected?: SelectOption
    onChange: (value: SelectOption| undefined, event?: React.MouseEvent<HTMLElement>) => void
    isOpen: boolean;
    query: string
}