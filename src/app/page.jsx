"use client"
import { SearchInput } from "./componant/SearchInput.jsx"; 
import { SearchIcon } from "./componant/SearchIcon.jsx";
import { Card } from "./componant/Card.jsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_KEY = '28f9714a181c403299b75845241312';

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[50%] h-screen bg-stone-50 flex flex-col-reverse items-center jusrify-center">
        <Card value="day" temperature={12} condition={'Sunny'} date="September 10, 2024" cityName="London" /> 
        <SearchInput />
      </div>
      <div className="w-[50%] h-screen bg-[#0F141E] flex flex-col-reverse relative items-center jusrify-center">
        <Card value="night"  temperature={-17} condition={'Cloudy'} date="September 10, 2024" cityName="London" />
      </div>
    </div> 
    // <div className=" w-full h-screen flex justify-center "> 
    //   <div className="flex items-center"> 
    //   <div className="bg-red-500 w-[100px] h=[100px] flex rounded-[50%] absolute z-[10]">
    //     <img className=" w-[43px] h-[86px] ml=[50px] my-[]" src="/left-logo.png" alt="logo1"></img>
    //     <img className=" w-[43px] h-[86px] ml=[50px] my=[]" src="/right-logo.png" alt="logo2"></img>
    //   </div>
    //   </div>
    //   <div className="w-[40%] h-[1200px] bg-[#F3F4F6] rounded-3xl flex flex-col justify-center items-center"> 
    //     <div className="flex ">
    //       <SearchIcon/>    
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="w-[100%] h=[80px] px-4 py-2 pr-12 text-sm text-black border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2"
    //       ></input>
    //     </div>
    //     <WeatherCard date="September 10, 2021" cityName="Kraków" value="day" />
    //   </div>
    //   <div className="w-[40%] h-[1200px] bg-[#0F141E] rounded-3xl flex justify-center items-center">
    //     <WeatherCard date="September 10, 2021" cityName="Kraków" value="night" />
    //   </div>
    // </div>
  );
}; 



