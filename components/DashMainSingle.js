import React from 'react'
import DashNav from './DashNav'
import CardsSection from './CardsSection'
import Transactions from './Transactions'
import PriBtn from './PriBtn'
import { MdDeleteForever } from "react-icons/md"
import AllCardsSection from './AllCardsSection'
import SingleCardSection from './SingleCardSection'
import CardDetails from './CardDetails'

const DashMainSingle = () => {

    const navData = {
        main: 'My Cards',
        sub: "Sed ut perspiciatis unde omnis iste natus error sit",
        right: <PriBtn
            clicked={() => { }}
            btnType="button"
            btnText={
                <div className="flex items-center">
                    <div className='mr-2'>
                        <MdDeleteForever className="w-5 h-5" />
                    </div>
                    <div>
                        Delete card
                    </div>
                </div>
            }
            addStyle="block bg-delete hover:bg-red-700 text-white text-xs px-3"
        />
    }

    return (
        <div className="">
            <DashNav data={navData} />
            <SingleCardSection />
            <div className="grid grid-cols-8 gap-3">
                <div className="col-span-8 lg:col-span-5">
                    <Transactions heading="Activity" />
                </div>
                <div className="col-span-8 lg:col-span-3">
                    <CardDetails />
                </div>
            </div>
            
        </div>
    )
}

export default DashMainSingle
