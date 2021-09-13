import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpLeft = () => {
    return (
        <div className="col-span-7 md:col-span-3 bg-white py-8 px-8 h-full">
            <div className="bg-white rounded-lg shadow-2xl p-6 mx-auto w-4/5">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpLeft
