import React from 'react';
import Navbar from "./components/Navbar";
import {BottomSheet} from "./components/BottomSheet";
import SearchBar from "./components/SearchBar";
// @ts-ignore
import PhoneFrame from "./components/PhoneFrame/PhoneFrame";
import TextInput from "./components/TextInput";
import FromToInputs from "./components/FromToInputs";


function App() {
    return (
        <PhoneFrame>
            <div
                className={"w-full h-full justify-center relative bg-[url('./assets/images/background.png')] bg-absolute bg-top-0"}>
                <div className={"w-full h-full flex flex-col justify-between"}>
                    <div className={"h-[100px] w-full flex justify-center items-end"}>
                        <SearchBar placeholder={"Buscar"}/>
                    </div>
                    <div>
                        <BottomSheet>

                        </BottomSheet>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </PhoneFrame>
    );
}

export default App;
