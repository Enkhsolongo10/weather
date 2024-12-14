import { CiLocationOn } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";














export const Card = ({value, date, cityName, temperature, condition,colors,image,statusStyle,color,conditionColor }) => {
    if(value==="night"){
      colors="bg-black"
      image="/Moon.png"
      statusStyle="text-white"
      color="text-white"
      conditionColor="text-[#777CCE]"

    } else if(value==="day"){
        image="/Sun.png"
        statusStyle='text-black'
        color="text-black"
        conditionColor="text-[#FF8E27]"
    }




    if(value==="night" && condition==="Sunny"){
        image="/NightRain.png"
    }






    if(value==="night" && condition==="Sunny"){
        condition="Clear"
    }
    
    return (
      <div  className={`w-[50%] h-[828px] rounded-3xl  ${colors}`}>
        <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
            <div className="text-sm">{date}</div> 
            <h2 className={`text-5xl font-extrabold my-2 ${color}`}>{cityName}</h2>
            <img className="w=[70%] h-[200px] mx-7 my-10" src={image} alt="theSun"></img>
            <div className={`text-9xl font-extrabold ${statusStyle}`} >{temperature}</div>
            <div className={`${conditionColor} text-xl font-extrabold`}>{condition}</div> 
            <div className="flex">
                <CiHome/>
                <CiLocationOn/>
                <CiHeart/>
                <CiUser/>
            </div>
        </div>
        {/* <div>
            <div className="text-sm">{date}</div> 
            <h2 className="text-5xl font-extrabold my-2">{cityName}</h2>
            <img className="w=[70%] h-[200px] mx-7 my-10" src={image} alt="theSun"></img>
            <div className="text-9xl font-extrabold">{temperature}</div>
            <div className="text-[#777CCE] text-xl font-extrabold">{condition}</div> 
        </div> */}
      </div>
    );
  }; 
