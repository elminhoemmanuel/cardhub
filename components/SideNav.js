import React from 'react'
import { sideData } from "./SideNavData"
import Link from "next/link"
import { RiLogoutBoxRFill } from "react-icons/ri"

const SideNav = () => {
    return (
        <div className="flex flex-col text-black justify-between h-full">
            <div>
                {
                    sideData.map(item => {
                        return <Link href={item.link} key={item.id}>
                            <a className='px-3 py-2 flex items-center hover:text-white hover:bg-btnblue rounded'>
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
            <div>
                <Link href="/dashboard" >
                    <a className='px-3 py-2 flex items-center hover:text-white hover:bg-btnblue rounded'>
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
    )
}

export default SideNav
