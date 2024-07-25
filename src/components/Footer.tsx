import { colorss } from "../constants"
import name from "../assets/logo.jpeg"

const Footer = () => {
  return (
    <div style={{backgroundColor:colorss.blueish}} className="h-[50px] flex justify-between items-center px-[60px] md:px-[90px] lg:px-[250px]">
      <img className="h-[30px] w-[30px]" src={name} />
      <div>
        <p style={{color:colorss.Gray, fontFamily: '"Oswald", sans-serif', fontWeight: "300", fontStyle:"italic"}}>Thank you for the oppurtunity.</p>
      </div>
    </div>
  )
}

export default Footer
