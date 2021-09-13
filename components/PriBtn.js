import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked }) => {

    let styling = `rounded py-2 focus:outline-none ${addStyle}`

    return (
        <button onClick={clicked} type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
