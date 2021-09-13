import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import DashMain from '../components/DashMain'
import SideNav from '../components/SideNav'



export default function Home() {

  return (
    <>
      <Head>
        <title>Cardhub | Dashboard</title>
        <meta name="keywords" content="Cardhub" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
       <div className="h-screen relative">
            <div className='w-28 bg-white fixed h-screen top-0 left-0 hidden md:block'>
                <SideNav />
            </div>
            <div className='md:ml-28 bg-dashgray'>
                <DashMain />
            </div>
            
       </div>
      </div>
    </>
  )
}
