import React from 'react'
import PriBtn from './PriBtn'
import { AiOutlineEdit } from "react-icons/ai"
import { cardsData } from './TransData'
import { SiMastercard, SiVisa, SiPaypal } from "react-icons/si"
import Link from "next/link"

const AllCardsSection = () => {
    return (
        <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            <Link href="/singlecards">
                <a className="block h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
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
                </a>
            </Link>

            <Link href="/singlecards">
                <a className="block h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
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
                </a>
            </Link>

            <Link href="/singlecards">
                <a className="block h-40 md:h-48 lg:h-40 bg-gradient-to-br from-card1 to-card2 text-cardgray rounded-2xl px-4 py-4 md:py-6 lg:py-4 ">
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
                </a>
            </Link>
        </div>
    )
}

export default AllCardsSection
