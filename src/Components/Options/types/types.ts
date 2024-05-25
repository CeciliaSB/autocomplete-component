import React from "react";

export type Option = {
    label: string
    value: any
}
export type OptionsProps = {
    options: Option []
    selected?: Option
    onChange: (value: Option| undefined, event?: React.MouseEvent<HTMLElement>) => void
    isOpen: boolean;
    query: string
}