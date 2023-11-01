import React from 'react';
import Navbar from "./components/Navbar";
import {BottomSheet} from "./components/BottomSheet";
import SearchBar from "./components/SearchBar";
// @ts-ignore
import background from './assets/images/background.png'
import PhoneFrame from "./components/PhoneFrame";


function App() {
    return (
        <PhoneFrame>
            <div className={" w-full h-full justify-center relative bg-[url('./assets/images/background.png')] bg-absolute bg-top-0"}>
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
