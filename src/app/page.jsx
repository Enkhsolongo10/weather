"use client"
import { SearchIcon } from "./componant/SearchIcon.jsx";
// import { Card, WeatherCard } from "./componant/card";
import { Card } from "./componant/card";


export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center ">
      <div className="w-[40%] h-[1200px] bg-[#F3F4F6] rounded-3xl flex flex-col justify-center items-center"> 
        <div className="flex ">
          <SearchIcon/>    
          <input
            type="text"
            placeholder="Search..."
            className="w-[100%] h=[80px] px-4 py-2 pr-12 text-sm text-black border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2"
          ></input>
        </div>
        {/* <Card date="September 10, 2021" cityName="Kraków" /> */}
        <Card value="day"/>
      </div>
      <div className="w-[40%] h-[1200px] bg-[#0F141E] rounded-3xl flex justify-center items-center">
         {/* <Card date="September 10, 2021" cityName="Kraków"  /> */}
         <Card value="night"/>
      </div>
    </div>
  );
};



