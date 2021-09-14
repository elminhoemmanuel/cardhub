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
            <div className='w-60 bg-white fixed h-screen top-0 left-0 hidden md:block px-3 pt-10 pb-6'>
                <SideNav />
            </div>
            <div className='md:ml-60 bg-dashgray pb-16 px-6 md:px-8'>
                <DashMain />
            </div>
            
       </div>
      </div>
    </>
  )
}
