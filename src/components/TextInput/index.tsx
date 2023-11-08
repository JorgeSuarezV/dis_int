import React from "react";
import {cva} from "class-variance-authority";


const inputVariants = cva(["flex rounded-xl p-3 items-start w-full border border-solid focus:border-primary-500 outline-none"], {
    variants: {
        variant: {
            error: ["border-error-red"],
            disabled: ["bg-greyScale-300, border-greyScale-300"],
            default: ["border-greyScale-300"],
        }
    },
    defaultVariants: {
        variant: "default",
    }
})

const labelVariants = cva(["font-inter text-sm font-normal"], {
    variants: {
        variant: {
            disabled: ["text-greyScale-300"],
            error: ["text-greyScale-700"],
            default: ["text-greyScale-700"],
        }
    },
    defaultVariants: {
        variant: "default",
    }
})

const helperTextVariants = cva(["font-inter text-xs font-normal"], {
    variants: {
        variant: {
            disabled: ["text-greyScale-300"],
            error: ["text-error-red"],
            default: ["text-greyScale-700"],
        }
    },
    defaultVariants: {
        variant: "default",
    }
})

export type inputState = "default" | "error" | "disabled"

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputState: inputState
    label: string
    isMandatory?: boolean
    helperText?: string
}

function TextInput({inputState, label, isMandatory, helperText, ...rest}: TextInputProps) {
    return (
        <div className={"flex flex-col items-start gap-2 w-full"}>
            <div className={"flex gap-1"}>
                <label className={labelVariants({variant: inputState})}>{label}</label>
                {!!isMandatory && <span className={"text-error-red font-inter text-sm font-normal"}>{" *"}</span>}
            </div>
            <input disabled={inputState === "disabled"} className={inputVariants({variant: inputState})} {...rest}/>
            {!!helperText && <p className={helperTextVariants({variant: inputState})}>{helperText}</p>}
        </div>
    )
}

export default TextInput