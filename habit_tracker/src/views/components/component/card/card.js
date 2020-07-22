import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Card = ({ text }) => {
    const [texty, setTexty] = useState('initialState');

    useEffect(() => {
        console.log('mount: ', texty)
        setTexty('helo')
    })
    useEffect(() => {
        console.log('render: ' , texty)
        return () => {console.log('unmount: ', texty)}
    })

    return (
        <>
            <h1>{text}</h1>
            <input type="text" value={texty} readOnly />
            <button onClick={() => {setTexty('new text')}}>Submit</button>
        </>
    )
}

Card.propTypes = {
    text: PropTypes.string
}

export default Card
