import React from 'react'
import { transData } from "./TransData"
import Image from "next/image"

const Transactions = () => {
    return (
        <div className="bg-white rounded-md p-6 ">
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                    <p className='font-bold text-base'>Transaction history</p>
                </div>
                <div>
                    <select name="categories" className='border-none bg-transparent p-3 focus:outline-none text-gray-400'>
                        <option>All Categories</option>
                        <option>Expenses</option>
                        <option>Income</option>
                    </select>
                </div>
            </div>
            <div className=''>
                <p className='pt-6 pb-6'>December 31</p>
                <div className="overflow-x-auto ">
                    <table className="w-full">
                        <tbody>
                            {
                                transData.map(item => {
                                    return <tr >
                                        <td>
                                            <div className="flex items-center py-2 flex-nowrap">
                                                <div className='mr-2'>
                                                    <Image width="40" height="40" src={item.img} alt="icon" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-sm md:text-base">{item.heading}</p>
                                                    <p className="text-gray-400 text-xs md:text-sm">{item.category} &nbsp;&nbsp;{item.means}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="py-2">
                                                {item.amt}
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                    {/* {
                        transData.map(item => {
                            return <div key={item.id} className="overflow-x-auto flex flex-nowrap items-center justify-between py-3">
                                <div className="flex items-center">
                                    <div className='mr-2'>
                                        <Image width="40" height="40" src={item.img} alt="icon" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-base">{item.heading}</p>
                                        <p className="text-gray-400 text-sm">{item.category} &nbsp;&nbsp;{item.means}</p>
                                    </div>
                                </div>
                                <div>
                                    {item.amt}
                                </div>
                            </div>
                        })
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Transactions
