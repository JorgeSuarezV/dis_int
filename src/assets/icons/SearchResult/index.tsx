import React, {ComponentType} from "react";

interface SearchResultProps {
    text: string
    description: string
    IconLeft: ComponentType;
    IconRight: ComponentType;
}

function SearchResult({text, description, IconLeft, IconRight}: SearchResultProps) {
    return (
        <div className={"w-full h-12 flex flex-row p-1 gap-2 items-center justify-start"}>
            <IconLeft/>
            <div className={"flex flex-grow flex-col"}>
                <p className={"font-Inter text-base font-normal"}>{text}</p>
                <p className={"font-Inter text-base font-normal text-greyScale-600"}>{description}</p>
            </div>
            <IconRight/>
        </div>
    )
}

export default SearchResult