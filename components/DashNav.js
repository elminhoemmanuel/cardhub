import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { sideData } from "./SideNavData"
import Link from "next/link"
import { RiLogoutBoxRFill } from "react-icons/ri"


const DashNav = ({ data }) => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'visible';
    }


    return (
        <div className="relative">

            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'dash-box-show flex shadow-xl flex-col justify-between md:hidden bg-white text-black px-3 w-3/4 h-screen fixed top-0 z-50 pt-8 max-w-screen-2xl transition'
                : 'dash-box flex shadow-xl flex-col justify-between md:hidden bg-white text-black px-3 w-3/4 h-screen fixed top-0  z-50 pt-8 max-w-screen-2xl '}>

                <div className="flex flex-col text-black pb-6 h-5/6">
                    <div className=''>
                        <div className='lg:hidden flex flex-row justify-end mb-2 px-2'>
                            <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-black hover:text-btnblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    </div>
                    <div>
                        {
                            sideData.map(item => {
                                return <Link href={item.link} key={item.id}>
                                    <a onClick={handleClickMobile} className='px-3 py-2 flex items-center hover:text-white hover:bg-btnblue rounded'>
                                        <div className="mr-3">
                                            {item.icon}
                                        </div>
                                        <div className='text-base'>
                                            {item.text}
                                        </div>
                                    </a>
                                </Link>
                            })
                        }
                    </div>

                </div>

                <div className="flex flex-col justify-between">
                    <div></div>
                    <Link href="/dashboard" >
                        <a onClick={handleClickMobile} className='px-3 py-2 flex items-center hover:text-white hover:bg-btnblue rounded'>
                            <div className="mr-3">
                                <RiLogoutBoxRFill className="h-6 w-6 text-logout" />
                            </div>
                            <div className='text-base'>
                                Logout
                            </div>
                        </a>
                    </Link>
                </div>

            </div>


            <div className='flex items-center justify-between text-black pt-8 pb-3 border-b border-gray-400'>
                <div className=''>
                    <div className='flex items-center mb-1'>
                        <button onClick={handleClick} className='block focus:outline-none md:hidden mr-2'>
                            <GiHamburgerMenu className="h-6 w-6 " />
                        </button>
                        <div >
                            <h1 className='text-xl font-bold'>{data.main}</h1>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>{data.sub}</p>
                    </div>
                </div>
                <div>
                    {data.right}
                </div>
            </div>
        </div>
    )
}

export default DashNav
