import React from 'react';
import Navbar from "./components/Navbar";
import {BottomSheet} from "./components/BottomSheet";
import SearchBar from "./components/SearchBar";
// @ts-ignore
import PhoneFrame from "./components/PhoneFrame/PhoneFrame";
import LineHeader from "./components/LineHeader";
import {ScrollableImages} from "./components/ScrollableImages";
import FromToInputs from "./components/FromToInputs";
import RouteSteps from "./components/RouteSteps";
import Divider from "./components/Divider";
import StartFinishStep from "./components/StartFinishStep";


function App() {
    const [searchValue, setSearchValue] = React.useState("")
    const [screen, setScreen] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <PhoneFrame screen={screen} setScreen={setScreen}>
            {screen === 0 && <div
                className={"w-full h-full justify-center relative bg-[url('./assets/images/background.png')] bg-absolute bg-top-0"}>
                <div className={"w-full h-full flex flex-col justify-between"}>
                    <div className={"h-[100px] px-4 flex justify-center items-end"}>
                        <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
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
            }
            {screen === 1 &&
                <div className={"w-full h-full flex flex-col gap-4 justify-start bg-white"}>
                    <div>
                        <FromToInputs/>
                    </div>
                    <div className={"w-full px-[26px]"}>
                        <RouteSteps steps={[
                            {type: "walking", number: 2},
                            {type: "bus", number: 32},
                            {type: "walking", number: 3},
                        ]}/>
                    </div>
                    <div className={"w-full px-[16px]"}>
                        <Divider/>
                    </div>

                    {/*<StartFinishStep*/}
                    {/*    description={"4th Avenue Sargent, Birmingham"}*/}
                    {/*    title={"Starbucks Coffee"}*/}
                    {/*    time={"12:31"}*/}
                    {/*/>*/}
                </div>
            }
        </PhoneFrame>
    );
}

export default App;
