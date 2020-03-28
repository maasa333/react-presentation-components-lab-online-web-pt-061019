// Code SimplerComponent Here

import React from 'react'

const handleClick = () => {
    alert('Hi!')
}

const SimplerComponent = (props) => <div onClick={handleClick}>I am just happy</div>

export default SimplerComponent