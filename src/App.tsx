import React from 'react';
import Navbar from "./components/Navbar";
import {BottomSheet} from "./components/BottomSheet";
import SearchBar from "./components/SearchBar";
// @ts-ignore
import PhoneFrame from "./components/PhoneFrame/PhoneFrame";
import RouteComponent from "./components/RouteComponent";
import LineHeader from "./components/LineHeader";
import {ScrollableImages} from "./components/ScrollableImages";


function App() {
    const [searchValue, setSearchValue] = React.useState("")

    return (
        <PhoneFrame>
            <div
                className={"w-full h-full justify-center relative bg-[url('./assets/images/background.png')] bg-absolute bg-top-0"}>
                <div className={"w-full h-full flex flex-col justify-between"}>
                    <div className={"h-[100px] px-4 flex justify-center items-end"}>
                        <SearchBar  value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                                   placeholder={"Buscar"}/>
                    </div>
                    <div>
                        <BottomSheet>
                            <div className={"flex-col justify-start  flex gap-2"}>
                                <div className={"flex-col flex justify-start px-4 gap-2"}>
                                    <LineHeader title={"Línea 152"} state={"detour"}/>
                                    <p className={"overflow-hidden text-greyScale-700 whitespace-nowrap font-sans text-base font-semibold leading-normal"}>
                                        Lorem ipsum y mucho mucho texto
                                    </p>
                                </div>
                                <div className={"pl-4"}>
                                    <ScrollableImages/>
                                </div>
                            </div>
                        </BottomSheet>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </PhoneFrame>
    );
}

export default App;
