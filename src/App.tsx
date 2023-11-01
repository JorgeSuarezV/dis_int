import React from 'react';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { RatingStarts } from './components/RatingStars';
import { States } from './components/States';
import BottomSheet from './components/BottomSheet';

function App() {
    return (
        <div className='flex w-full h-full justify-center content-center'>
            <div className='justify-center relative w-[412px] h-[892px] bg-white'>
                <div className={"w-full h-full flex flex-col justify-between"}>
                    <div className={"h-[100px] w-full flex justify-center items-end"}>
                        <SearchBar placeholder={"Buscar"}/>
                    </div>
                    <div>
                        <BottomSheet>
                            <RatingStarts />
                            <States type={'PARO'}/>
                        </BottomSheet>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
