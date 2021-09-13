import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked }) => {

    let styling = `rounded bg-btnblue text-white py-2 hover:bg-blue-600 focus:outline-none ${addStyle}`

    return (
        <button onClick={clicked} type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
