import React, {useState} from 'react';
import {log} from "util";

interface SearchBarProps {
    placeholder: string;
}
export default function SearchBar({placeholder}: SearchBarProps) {
    const [value, setValue] = useState("");
    return (
        <input placeholder={placeholder} value={value} onChange={(e) => console.log(e)}>
            <div></div>
            <div></div>
        </input>
    );
}