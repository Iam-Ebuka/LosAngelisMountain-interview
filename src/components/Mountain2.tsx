import heroImage from "../assets/HeroSection.jpeg"

const Mountain2 = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${heroImage})`}}  
    className="
    lg:hidden 
    h-[60vh]
    bg-top 
    bg-cover 
    bg-no-repeat
    relative
    flex
    justify-center
    items-center
    ">
        <div style={{
            backgroundColor: "rgba(255,255,255,0.8)", 
            padding: "15px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "80%",
            maxWidth: "300px"
            }}>
            <h3 className="font-bold text-[30px]" style={{color:'rgb(56, 69, 92)', fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,}}>SCHEDULE</h3>
            <div style={{fontFamily:"Lato, sans-serif", fontWeight: "300"}}>
                <div className="flex gap-4">
                    <p>25 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4">
                    <p>25 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4 py-2">
                    <p>25 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4">
                    <p>25 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}


export default Mountain2
