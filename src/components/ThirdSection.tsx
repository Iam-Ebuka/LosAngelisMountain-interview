import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Mountain1 from "./Mountain1";
import Mountain2 from "./Mountain2";
import MOUT1 from "./MOUT1";
import MOUT2 from "./MOUT2";
import { colorss } from "../constants";

const tabs=["MOUNTAIN 1", "MOUNTAIN 2"]
const ThirdSection = () => {
    const [accordion, setAccordion] = useState(false) //for moblie
    const [accordion2, setAccordion2] = useState(false) //for mobile
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const ScreenShown = () => {
        switch (activeTab) {
            case "MOUNTAIN 1":
                return <MOUT1 />;
            case "MOUNTAIN 2":
                return <MOUT2 />;
            default:
                return "error"; 
        }
    };


  
  return (
    <div className="">
        <div className="flex flex-col md:items-center md:justify-center md:gap-[60px] md:px-[100px] lg:px-[300px] md:flex-row py-[10px]">
            <div className="relative ml-[40px] md:ml-0">
                <h2 style={{
        fontFamily: '"Oswald", sans-serif',
        fontOpticalSizing: 'auto', 
        fontWeight: 700,
        fontStyle: 'normal',
        color: colorss.Gray
      }} className="styleText text-[80px]">02.</h2>
                <p style={{
        fontFamily: '"Oswald", sans-serif',
        fontOpticalSizing: 'auto', 
        fontWeight: 700,
        fontStyle: 'normal',
        color:colorss.blueish
      }} className="text-[15px] font-bold absolute top-[60px] left-[88px]">CLIMB</p>
            </div>
            <div className="px-[30px] md:px-0 ]">
                <p style={{fontFamily:"Lato, sans-serif", fontWeight: "300"}}>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
            </div>
        </div>
        <div
        onClick={()=>setAccordion(!accordion)}
        className="
        mt-[40px]
        md:mt-0
        h-[40px] 
        lg:hidden 
        flex 
        justify-center 
        items-center space-x-2 
        font-bold
        cursor-pointer" 
        style={{ backgroundColor: 'rgb(56, 69, 92)', color: "rgb(176, 180, 190)", border: '1px solid black'}}>
            <p style={{fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,}}>MOUNTAIN 1</p>
            {accordion ? <FaAngleDown/> : <FaAngleUp/> }
        </div>
        {accordion && <Mountain1 />}
        <div 
        onClick={()=>setAccordion2(!accordion2)}
        className="
        h-[40px] 
        lg:hidden 
        flex 
        justify-center 
        items-center space-x-2 
        font-bold
        cursor-pointer" 
        style={{ backgroundColor: 'rgb(56, 69, 92)', color: "rgb(176, 180, 190)", border: '1px solid black'}}>
            <p style={{fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,}}>MOUNTAIN 2</p>
            {accordion2 ? <FaAngleDown/> : <FaAngleUp/> }
        </div>
        {accordion2 && <Mountain2 />}
        <div 
        style={{ backgroundColor: 'rgb(56, 69, 92)' }} 
        className="
        hidden 
        lg:flex
        h-[30px]
        pl-[200px]
        items-center
        font-bold
        ">
            <div onClick={()=>setActiveTab(tabs[0])} 
                className="w-[150px] h-full flex items-center justify-center hover:cursor-pointer"
                style={{color: activeTab === tabs[0]? colorss.blueish : colorss.Gray, 
                         backgroundColor: activeTab === tabs[0]? colorss.Gray: colorss.blueish
                }}
            >
                <p style={{fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,fontSize:"22px"}}>MOUNTAIN 1</p>
            </div>
            <div onClick={()=>setActiveTab(tabs[1])} 
            className="w-[150px] h-full flex items-center justify-center hover:cursor-pointer"
            style={{color: activeTab === tabs[1]? colorss.blueish : colorss.Gray, 
                backgroundColor: activeTab === tabs[1]? colorss.Gray: colorss.blueish
       }}>
                <p style={{fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,fontSize:"22px"}} className="text-center">MOUNTAIN 2</p>
            </div>
        </div>
        {ScreenShown()}
      
    </div>
  )
}

export default ThirdSection
