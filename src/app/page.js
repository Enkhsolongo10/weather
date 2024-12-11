"use client"
import { SearchIcon } from "./componant/searchIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-[#404040] flex justify-center py-40">

      <div className="w-[40%] h-[1200px] bg-[#F3F4F6] rounded-3xl flex flex-col justify-center items-center"> 
        <div className="flex ">
          <SearchIcon/>    
          <input
            type="text"
            placeholder="Search..."
            className="w-[50%] h=[] px-4 py-2 pr-12 text-sm text-black border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2"
          ></input>
        </div>
        <div>
      </div>
        <div  className="text-black bg-[#FFFFFFBF] w-[50%] h-[828px] rounded-3xl">
          <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
            <div className="text-sm">September 10, 2021</div> 
            <h2 className="text-5xl font-extrabold my-2">Kraków</h2>
            <img className="w=[70%] h-[200px] mx-7 my-10" src="Sun.png" alt="theSun"></img>
          </div>
        </div>
      </div>

      <div className="w-[40%] h-[1200px] bg-[#0F141E] rounded-3xl flex justify-center items-center">
      <div  className=" bg-[#111827BF] w-[50%] h-[828px] rounded-3xl">
          <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
            <div className="text-sm text-[#9CA3AF]">September 10, 2021</div> 
            <h2 className="text-5xl font-extrabold my-2">Kraków</h2>
            <img className="w=[70%] h-[200px] mx-7 my-10" src="Moon.png" alt="theSun"></img>
          </div>
        </div>
      </div>

    </div>
  );
}
