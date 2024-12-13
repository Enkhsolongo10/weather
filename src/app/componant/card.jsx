// export const WeatherCard = ({value})=>{
//     // const colors = value=='day' ? "text-black bg-[#FFFFFFBF]" :" bg-[#111827BF]"
//     const sun = "Sun.png"
//      const image = value === "day" ? "Sun.png" : "Moon.png"
//     return (
//       <div  className={`w-[50%] h-[828px] rounded-3xl  ${colors}`}>
//         <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
//             <div className="text-sm">{date}</div> 
//             <h2 className="text-5xl font-extrabold my-2">{cityName}</h2>
//             <img className="w=[70%] h-[200px] mx-7 my-10" src={image} alt="theSun"></img>
//         </div>
//       </div>
//     )
//   };
//   , date, cityName, image 
"use client"

export function Card({value}) {
    const sun = "Sun.png"
    const img = value === "day" ? "Sun.png" : "Moon.png"
    return(
        <img src={img}/>
        )
}