import React from 'react'
import PriBtn from './PriBtn'
import { AiOutlineEdit } from "react-icons/ai"
import { cardsData } from './TransData'
import { SiMastercard, SiVisa, SiPaypal } from "react-icons/si"

const CardsSection = () => {
    return (
        <div className='my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className=' rounded-2xl px-4 py-4 md:py-6 lg:py-4 bg-btnblue text-white h-40 md:h-48 lg:h-40'>
                <p className="text-sm mb-3">Total Available Balance</p>
                <h1 className="font-bold mb-3 text-2xl">$25,958,485</h1>
                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-3">
                    <PriBtn
                        clicked={() => { }}
                        btnType="button"
                        btnText="Fund wallet"
                        addStyle="block  bg-white hover:bg-gray-300 text-textblue text-center text-xs px-2 border border-white hover:border-gray-300"
                    />
                    <PriBtn
                        clicked={() => { }}
                        btnType="button"
                        btnText="Withdraw wallet"
                        addStyle="block  bg-transparent hover:bg-white text-white hover:text-textblue text-center text-xs px-2 border border-white"
                    />
                </div>
            </div>

            <div className="h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-white text-xl">150 000 UAH</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <AiOutlineEdit className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className='mb-3'>
                    <p className='text-base'>2132 8732 2347 3478</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-sm">07/20</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <SiMastercard className="w-10 h-6 text-cardgray" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-white text-xl">12 180 USD</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <AiOutlineEdit className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className='mb-3'>
                    <p className='text-base'>8346 5248 6232 7813</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-sm">10/24</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <SiVisa className="w-10 h-6 text-cardgray" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-white text-xl">8 305 EUR</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <AiOutlineEdit className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className='mb-3'>
                    <p className='text-base'>5438 2343 0474 7324</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="text-sm">14/28</h2>
                    </div>
                    <div>
                        <button className='block focus:outline-none'>
                            <SiPaypal className="w-10 h-6 text-cardgray" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection
