import React from 'react'
import PriBtn from './PriBtn'
import { useRouter } from "next/router"

const SignUpForm = () => {

    const router = useRouter();

    return (
        <form >
            <div className='text-center py-3'>
                <h1 className="font-bold text-black text-xl">Create an account</h1>
                <p className="text-formtext text-sm">Create an account to continue</p>
            </div>
            <div className="mb-2">
                <div className="mb-2">
                    <div className="mb-1">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input 
                        name='email'
                        type="text"
                        className="block w-full text-formtext focus:outline-none rounded border border-inputborder bg-inputbg p-3"
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <div className="mb-1">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input 
                        name='password'
                        type="password"
                        className="block w-full text-formtext focus:outline-none rounded border border-inputborder bg-inputbg p-3"
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <div className="mb-1">
                        <label htmlFor="conf_password">Confirm Password</label>
                    </div>
                    <div>
                        <input 
                        name='conf_password'
                        type="password"
                        className="block w-full text-formtext focus:outline-none rounded border border-inputborder bg-inputbg p-3"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-1">
                        <label htmlFor="currency">Select Currency</label>
                    </div>
                    <div>
                        <select
                        name="currency"
                        className="block w-full text-formtext focus:outline-none rounded border border-inputborder bg-inputbg p-3"
                        >
                            <option value="usd">United States Dollar (USD)</option>
                            <option value="naira">Nigerian Naira (NGN)</option>
                            <option value="pounds">British Punds Sterling </option>
                        </select>
                    </div>
                </div>
                <div className="mb-2 flex items-center">
                    <div className="mr-1">
                        <input type="checkbox" id="terms" name="terms" className=''/>
                    </div>
                    <div>
                        <label htmlFor="terms">I accept the terms and conditions</label>
                    </div>
                </div>
                <div className="mb-2 ">
                    <PriBtn clicked={()=>{router.push('/dashboard')}} btnType="submit" btnText="Get Started" addStyle="block w-full bg-btnblue text-white hover:bg-blue-600"  />
                </div>
            </div>
        </form>
    )
}

export default SignUpForm
