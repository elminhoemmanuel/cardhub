import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import SignUpLeft from '../components/SignUpLeft'
import SignUpRight from '../components/SignUpRight'



export default function Home() {

  return (
    <>
      <Head>
        <title>Cardhub</title>
        <meta name="keywords" content="Cardhub" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
       <div className="h-screen grid grid-cols-7">
            <SignUpLeft />
            <SignUpRight />
       </div>
      </div>
    </>
  )
}
