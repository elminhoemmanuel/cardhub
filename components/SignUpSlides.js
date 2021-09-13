import React from 'react'
import Image from "next/image"

const SignUpSlides = ({data}) => {
    return (
        <div className="bg-transparent flex flex-col items-center justify-center py-40 px-32">
            <div className="mb-4">
                <Image width="80" height="80" src={data.img} alt="onboarding icons"/>
            </div>
            <div>
                <h2 className="text-center text-xl font-bold text-textblue mb-3">{data.heading}</h2>
                <p className="text-center text-sm text-textblue mb-3">{data.text}</p>
            </div>
        </div>
    )
}

export default SignUpSlides
