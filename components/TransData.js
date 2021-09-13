import { SiMastercard, SiVisa, SiPaypal } from "react-icons/si"

export const transData = [
    {
        id:1,
        heading:'”Food & Drinks” restaurant',
        category:'Cafe and restaurants',
        means:'Card: ** 3478',
        img:"/images/cup.png",
        amt:<p className='text-sm text-gray-400 text-right'><span className='font-bold text-black text-lg'>- 480</span> UAH</p>

    },
    {
        id:2,
        heading:'”Walmart” store (Main Str. 13)',
        category:'Groceries & food',
        means:'Card: ** 7813',
        img:"/images/basket.png",
        amt:<p className='text-sm text-gray-400 text-right'><span className='font-bold text-black text-lg'>- 80</span> USD</p>

    },
    {
        id:3,
        heading:<span>Transfer from <span className="text-btnblue underline">Alexey</span></span>,
        category:'Transactions',
        means:'To card: ** 3478',
        img:"/images/avatar.png",
        amt:<p className='text-sm text-gray-400 text-right'><span className='font-bold text-green-700 text-lg'>6 000</span> UAH</p>

    },
    
]