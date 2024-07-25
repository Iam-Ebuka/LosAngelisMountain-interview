import bird from '../assets/MountainBlueSky.jpeg'

const MOUT2 = () => {
  return (
    <div style={{ backgroundImage: `url(${bird})`}} 
    className="
    hidden
    lg:block
    h-[75vh]
    bg-center 
    bg-cover 
    bg-no-repeat
    relativept-[100px]
    pt-[100px]
    pl-[230px]">
      <div style={{
            backgroundColor: "rgba(255,255,255,0.8)", 
            padding: "15px",
            justifyContent: "center", 
            display: "flex",
            flexDirection: "column",
            width: "80%",
            maxWidth: "300px",
            }}>
            <h3 className="font-bold text-[40px] pl-[20px]" style={{color:'rgb(56, 69, 92)', fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400,}}>SCHEDULE</h3>
            <div style={{fontFamily:"Lato, sans-serif", fontWeight: "300"}}>
                <div className="flex gap-4 w-full justify-center">
                    <p>25 Nov 2017</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <p>25 Nov 2017</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4 py-2 w-full justify-center">
                    <p>26 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <p>25 Nov 2016</p>
                    <p>Vestibulum viverra</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MOUT2
