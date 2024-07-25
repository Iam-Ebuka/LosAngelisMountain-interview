import { useRef, useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import { colorss } from '../constants';
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import logoName from "../assets/logoName.jpeg"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [changeColor, setChangeColor] = useState(false)
    const handleClick = () =>{ 
        setClick(!click)
        if (window.scrollY < 400) {
            setChangeColor(!changeColor)
        }
    };
    const closeMenu = () => setClick(false);


    const navbarRef = useRef(null); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 400) {
               setChangeColor(true)
            } else {
               setChangeColor(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={navbarRef}
            className='header fixed top-0 py-3 z-50 w-full px-[60px] md:px-[90px] lg:px-[250px] items-center'
            style={changeColor? {backgroundColor: "white"} : {backgroundColor: "transparent"} }
        >
        
            <nav className='flex justify-between items-center'>
                <a href='/' className='logo'>
                    {changeColor? 
                    <img className='h-[30px] w-[100px]' src={logoName}/>
                    : 
                    <img className='h-[30px] w-[30px]' src={logo} alt='logo' /> }
                </a>
                <ul className='space-x-[50px] hidden lg:flex '>
                    <li className='border-b font-bold' style={ changeColor ? 
                    {color:colorss.blueish, 
                    borderColor: colorss.blueish, 
                    fontFamily: "Lato, sans-serif", 
                    fontWeight: 700, 
                    fontStyle: "italic"} 
                    : 
                    {color: "white", 
                    borderColor: "white", 
                    fontFamily: "Lato, sans-serif", 
                    fontWeight: 700, 
                    fontStyle: "italic"} } >
                        <a href='#history' onClick={closeMenu} >
                            01. HISTORY
                        </a>
                    </li>
                    <li className='border-b font-bold' style={changeColor ? 
                        {color:colorss.blueish, 
                        borderColor: colorss.blueish, 
                        fontFamily: "Lato, sans-serif", 
                        fontWeight: 700, 
                        fontStyle: "italic"} 
                        : 
                        {color: "white", 
                        borderColor: "white", 
                        fontFamily: "Lato, sans-serif", 
                        fontWeight: 700, 
                        fontStyle: "italic"} } >
                        <a href='#team' onClick={closeMenu}>
                            02. TEAM
                        </a>
                    </li>
                </ul>
                {/* mobile menu */}
                <div onClick={handleClick} className='block lg:hidden'>
                    {click? <MdCancel size={30} /> : <CiMenuBurger size={30} />}
                    
                </div>
            </nav>
            {click && <div className='w-full'>
            <div style={{backgroundColor:"white", width:"100% absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2", paddingLeft:"40px",paddingRight:"40px", paddingTop:"20px", paddingBottom:"20px"}}>
                    <li className='font-bold text-center text-[30px]' style={ 
                    {color:colorss.blueish, 
                    borderColor: colorss.blueish, 
                    fontFamily: "Lato, sans-serif", 
                    fontWeight: 700, 
                    fontStyle: "italic"} 
                    } >
                        <a href='#history' onClick={closeMenu} >
                            01. HISTORY
                        </a>
                    </li>
                    <li className='font-bold text-center text-[30px]' style={ 
                        {color:colorss.blueish, 
                        borderColor: colorss.blueish, 
                        fontFamily: "Lato, sans-serif", 
                        fontWeight: 700, 
                        fontStyle: "italic"} } >
                        <a href='#team' onClick={closeMenu}>
                            02. TEAM
                        </a>
                    </li>
            </div>
            </div>
                }
        </div>
    );
};

export default Navbar;
