import React from 'react'

export default function Tomato({color}) {

    const style = {
        background: color,
        height: '5vh',
        color: 'white',
        marginBottom: '5px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
    }
  return (
    <div className='tomato' style={style}>
        Tomato
    </div>
  )
}
