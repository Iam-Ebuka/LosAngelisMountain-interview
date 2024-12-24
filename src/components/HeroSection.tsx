import './HeroSection.css'
import heroImage from '../assets/HeroSection.jpeg'
import stars from "../assets/plentyStars.jpeg"
import { colorss } from '../constants';

const HeroSection = () => {
    const hStyle = {
        fontFamily: 'Bebas Neue, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        background: `linear-gradient(180deg, ${colorss.blueish}, ${colorss.blueish},#000000)`,
        backgroundClip: "text",
        WebkitBackgroundClip: 'text', 
        textFillColor:"transparent",
        webkitTexFillColor: "transparent",
        color: "transparent"
    };
    const hStyle1 = {
        fontFamily: 'Bebas Neue, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        color: "rgb(77,77,77)"
    };
  return (
    <div className='
    h-[70vh] 
    md:h-[100vh]
    bg-top 
    bg-cover 
    bg-no-repeat
    relative
    overflow-hidden
    w-full' 
    style={{ backgroundImage: `url(${heroImage})`}}>
                <div style={{ 
                backgroundImage: `url(${stars})`, 
                opacity: 0.2, 
                backgroundPosition: "center", 
                backgroundSize:"cover"}} 
                className='top-0 absolute h-[70vh] w-full z-20'></div>
        <div className='pt-[150px] sm:pt-[80px] md:pt-[150px] lg:pt-[150px] w-full text-center -space-y-[40px] md:-space-y-[40px] lg:-space-y-[80px] relative'>
            <h1 style={hStyle1} className='text-[70px] md:text-[70px] lg:text-[114px] font-bold z-40'>LOSANGELES</h1>
            <h1 style={hStyle} className='text-[75px] md:text-[75px] lg:text-[124px] font-bold z-40'>MOUNTAINS</h1>
            
        </div> 
        {/* <div style={{ backgroundImage: `url(${tryImage})`, backgroundPosition: "center", backgroundSize:"cover"}} className='top-[44%] hidden lg:block absolute h-[100vh] w-full z-50'></div> */}

    </div>
  )
}

export default HeroSection
