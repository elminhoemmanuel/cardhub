import React from 'react'
import DashNav from './DashNav'
import CardsSection from './CardsSection'
import Transactions from './Transactions'

const DashMain = () => {

    const navData = {
        main: 'Dashboard',
        sub: "Sed ut perspiciatis unde omnis iste natus error sit",
        right: <p></p>
    }

    return (
        <div className="">
            <DashNav data={navData} />
            <CardsSection />
            <Transactions heading="Transaction history" />
        </div>
    )
}

export default DashMain
