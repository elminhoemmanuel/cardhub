import React from 'react'
import DashNav from './DashNav'
import CardsSection from './CardsSection'
import Transactions from './Transactions'
import PriBtn from './PriBtn'
import { MdAddCircleOutline } from "react-icons/md"
import AllCardsSection from './AllCardsSection'

const DashMain = () => {

    const navData = {
        main: 'My Cards',
        sub: "Sed ut perspiciatis unde omnis iste natus error sit",
        right: <PriBtn
            clicked={() => { }}
            btnType="button"
            btnText={
                <div className="flex items-center">
                    <div className='mr-2'>
                        <MdAddCircleOutline className="w-5 h-5" />
                    </div>
                    <div>
                        Add new card
                    </div>
                </div>
            }
            addStyle="block bg-btnblue hover:bg-blue-600 text-white text-xs px-3"
        />
    }

    return (
        <div className="">
            <DashNav data={navData} />
            <AllCardsSection />
            <Transactions />
        </div>
    )
}

export default DashMain
