import brownMountain from "../assets/smallFarMountain.jpeg"
import blurMountain from '../assets/BlurryMountain.jpeg'
import manOnMountain from '../assets/ManOnMountain.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colorss } from "../constants";
import Slider from "react-slick";

const SecondSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      

  return (
    <div className="">
       <div className='
    h-[100vh]
    md:h-[100vh] 
    bg-top 
    bg-cover 
    bg-no-repeat
    relative
    
    ' 
    style={{ backgroundImage: `url(${brownMountain})`}}>
        <div className="pt-[20px]">
            <div className="relative ml-[40px] lg:ml-[240px] ">
                <h2 style={{
        fontFamily: '"Oswald", sans-serif',
        fontOpticalSizing: 'auto', 
        fontWeight: 700,
        fontStyle: 'normal',
        color: colorss.Gray
      }} className="text-[80px] text-gray-500">01.</h2>
                <p style={{
        fontFamily: '"Oswald", sans-serif',
        fontOpticalSizing: 'auto', 
        fontWeight: 700,
        fontStyle: 'normal',
        color:colorss.blueish
      }} className="text-[15px] font-bold absolute top-[60px] left-[78px]">HISTORY</p>
            </div>
            <div className="px-[30px] md:px-[100px] lg:px-[300px]">
                <p style={{fontFamily:"Lato, sans-serif", fontWeight: "300"}} className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
            </div>
            
        </div>
        <div style={{ backgroundColor: 'rgba(56, 69, 92, 0.7)', overflow: 'hidden'}} className="
        w-full 
        px-[30px] 
        py-[20px]
        md:px-[100px] 
        lg:px-[300px]
        mx-auto 
        bottom-0
        absolute
        ">
            <Slider {...settings}>
                <div className="px-[5px]">
                    <img src={blurMountain}></img>
                </div>
                <div className="px-[5px]">
                    <img src={manOnMountain}></img>
                </div>
                <div className="px-[5px]">
                    <img src={blurMountain}></img>
                </div>
                <div className="px-[5px]">
                    <img src={manOnMountain}></img>
                </div>
            </Slider>
        </div>
         
    </div>
    </div>
  )
}

export default SecondSection
