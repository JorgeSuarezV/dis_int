import React from "react";
import DayPicker from "../DayPicker";


export default function WeekPicker() {
    return (
        <div className={"flex justify-between items-center w-full"}>
            {["L","M","M","J","V","S","D"].map((letter) => {
                return (
                    <DayPicker text={letter} isEnabled={false}/>
                )
            })}
        </div>
    )
}