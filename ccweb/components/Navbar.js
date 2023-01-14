import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  useEffect(() => {
    const changeColor= () =>{
      if(window.scrollY >=180) {
        setColor('#ffffff')
        setTextColor('#642b08')
      }
      else{
        setColor('transparent')
        setTextColor('#ffffff')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  const menuItem = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Products"
    },
    {
      id: 3,
      name: "Contact Us"
    },
  ]

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-500">
      <div className="max-w-[1100px] m-auto flex justify-between items-center p-4">
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className="text-2xl">|OiO|</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex uppercase font-sans text-sm ease-in-out duration-500">
          <li className="px-4 hover:font-semibold duration-200 peer-checked">
            <Link href='/homepage'>Home</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200">
            <Link href='/productpage'>Products</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200 peer-checked:ring-green-500">
            <Link href='/contactpage'>Contact us</Link>
          </li>
        </ul>
        <div className="sm:hidden block z-10 ">
          {!navigation && (
            <div style={{ color: `${textColor}` }} className="sm:hidden bg-fixed text-2xl" onClick={() => setNavigation(true)}>
              <AiOutlineMenu />
            </div>
          )}
        </div>
        <div className={
          navigation 
          ? "sm:hidden absolute top-0 left-0 right-0 button-0 w-4/5 flex justify-center items-center h-screen bg-black text-center ease-in duration-200 text-white" 
          : "sm:hidden absolute top-0 left-[-100%] right-0 button-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"}>
          <div>
            <div onClick={() => setNavigation(false)}>
              <AiOutlineClose size={22} />
            </div>
            <div className="mt-8 flex flex-col h-fit uppercase gap-20 font-sans text-white">
              <ul>
                {menuItem.map(({ id, name, index }) => (
                  <Link key={index} href={`/#${id}`}>
                    <li className="py-4 text-xl">{name}</li>
                  </Link>
                ))}
              </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar