import React from "react";
import Button from "../Button";

export interface ModalProps {
    title: string,
    body: string,
}

export default function Modal({title, body}: ModalProps) {
    return (
        <div className={"flex w-80 p-8 flex-col items-start space-y-6 rounded-lg border border-gray-200 bg-white shadow-lg"}>
            <p className={"font-inter text-xl font-medium"}>{title}</p>
            <p className={"font-inter text-sm font-normal leading-normal"}>{body}</p>
            <div className={"flex justify-center items-end gap-4 self-stretch"}>
                <Button variant={"outlined"}>Cancelar</Button>
                <Button variant={"fulfilled"}>Aceptar</Button>
            </div>
        </div>
    )
}