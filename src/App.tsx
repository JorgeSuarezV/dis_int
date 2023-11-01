import React from 'react';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import {BottomSheet} from "./components/BottomSheet";

function App() {
  return (
      <div className='flex w-full h-full justify-center content-center'>
        <div className='justify-center relative w-[412px] h-[892px] bg-white'>
          <Navbar />
        </div>
      </div>
  );
}

export default App;
