import React from 'react'

const CardDetails = () => {
    return (
        <div className="bg-white rounded-md p-6 h-96">
            <div className="pb-6 border-b border-gray-200">
                <h1 className='font-bold text-base'>Card Info</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <td><p className="text-gray-400 text-base py-3">CARD NAME:</p></td>
                            <td><p className="text-base text-right py-3">Chris Jombo</p></td>
                        </tr>
                        <tr className="">
                            <td><p className="text-gray-400 text-base py-3">CARD NO:</p></td>
                            <td><p className="text-base text-right py-3">4685885266465242</p></td>
                        </tr>
                        <tr className="">
                            <td><p className="text-gray-400 text-base py-3">CVV:</p></td>
                            <td><p className="text-base text-right py-3">133</p></td>
                        </tr>
                        <tr className="">
                            <td><p className="text-gray-400 text-base py-3">ZIPCODE:</p></td>
                            <td><p className="text-base text-right py-3">23401</p></td>
                        </tr>
                        <tr className="">
                            <td><p className="text-gray-400 text-base py-3">ADDRESS:</p></td>
                            <td><p className="text-base text-right py-3">19, Olubunmi Rotimi,<br/> Lekki, Lagos</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardDetails
